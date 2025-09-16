const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const { exec, execSync } = require('child_process');
const { SerialPort } = require('serialport');
const fs = require('fs');
const pathManager = require('./pathManager');
const firstRun = require('electron-first-run');
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;

// First-run installation with CH340 driver
if (firstRun()) {
  try {
    console.log('First-run setup starting...');
    
    // Install CH340 driver first (platform-specific)
    if (process.platform === 'win32') {
      const ch340Installer = path.join(pathManager.getBinPath(), 'CH340-installer.exe');
      if (fs.existsSync(ch340Installer)) {
        console.log('Installing CH340 driver...');
        execSync(`"${ch340Installer}" /S`, { stdio: 'inherit' });
        console.log('CH340 driver installation completed');
      } else {
        console.warn('CH340 installer not found at:', ch340Installer);
      }
    } else if (process.platform === 'darwin') {
      console.log('macOS detected - CH340 driver installation may be required manually');
      console.log('Please install from: https://github.com/adrianmihalko/ch340g-ch34g-ch34x-mac-os-x-driver');
    }

    // Setup Arduino CLI (platform-specific)
    const arduinoCliName = process.platform === 'win32' ? 'arduino-cli.exe' : 'arduino-cli';
    const arduinoCli = path.join(pathManager.getBinPath(), isDev ? arduinoCliName : arduinoCliName);
    console.log('Initializing Arduino CLI...');
    execSync(`"${arduinoCli}" config init`, { stdio: 'inherit' });
    
    console.log('Updating core index...');
    execSync(`"${arduinoCli}" core update-index`, { stdio: 'inherit' });
    
    console.log('Installing Arduino AVR core...');
    execSync(`"${arduinoCli}" core install arduino:avr`, { stdio: 'inherit' });
    
    console.log('First-run setup completed successfully');
  } catch (error) {
    console.error('First-run setup failed:', error);
  }
}

// Remove default menu bar
Menu.setApplicationMenu(null);

function createTempSketchDir() {
  const timestamp = Date.now();
  const tempDir = path.join(app.getPath('userData'), 'temp', `sketch_${timestamp}`);
  return {
    path: tempDir,
    fileName: `sketch_${timestamp}.ino`
  };
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    },
    title: "CYE Uploader"
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
  } else {
    try {
      const rendererPath = pathManager.getRendererPath();
      mainWindow.loadFile(path.join(rendererPath, 'index.html'));
    } catch (error) {
      console.error('Renderer path error:', error);
      mainWindow.loadURL(`data:text/html;charset=utf-8,<body style="background:#1e1e1e;color:white;padding:20px;font-family:monospace">
        <h1>Error Loading Application</h1>
        <pre>${error.message.replace(/\n/g, '<br>')}</pre>
        <p>Please check:</p>
        <ul>
          <li>Renderer build exists in correct location</li>
          <li>Application was packaged correctly</li>
        </ul>
      </body>`);
    }
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('open-dev-tools', () => {
  if (mainWindow) {
    mainWindow.webContents.openDevTools();
  }
});

// Enhanced Arduino device detection
async function detectArduinoDevice() {
  try {
    console.log("Detecting Arduino device...");
    
    // Method 1: Try SerialPort library
    if (SerialPort && typeof SerialPort.list === 'function') {
      const ports = await SerialPort.list();
      console.log(`Found ${ports.length} total serial ports`);
      
      for (const port of ports) {
        console.log(`Checking port: ${port.path}`, {
          manufacturer: port.manufacturer,
          vendorId: port.vendorId,
          productId: port.productId
        });
        
        // Check for Arduino-specific identifiers
        const isArduino = (
          // Common Arduino vendor IDs
          (port.vendorId && ['2341', '1a86', '0403', '10c4'].includes(port.vendorId.toLowerCase())) ||
          // Manufacturer strings
          (port.manufacturer && port.manufacturer.toLowerCase().includes('arduino')) ||
          // Product strings
          (port.product && port.product.toLowerCase().includes('arduino')) ||
          // CH340 chip (common in Arduino clones)
          (port.manufacturer && port.manufacturer.toLowerCase().includes('qinheng')) ||
          // USB Serial identifiers
          (port.serialNumber && port.serialNumber.toLowerCase().includes('arduino'))
        );
        
        if (isArduino) {
          return {
            connected: true,
            port: port.path,
            manufacturer: port.manufacturer || 'Arduino Device',
            vendorId: port.vendorId,
            productId: port.productId
          };
        }
      }
    }
    
    // Method 2: Try arduino-cli as fallback
    console.log("No Arduino found via SerialPort, trying arduino-cli...");
    const arduinoCliName = process.platform === 'win32' ? 'arduino-cli.exe' : 'arduino-cli';
    const arduinoCli = path.join(pathManager.getBinPath(), isDev ? arduinoCliName : arduinoCliName);
    
    try {
      const output = execSync(`"${arduinoCli}" board list`, { 
        encoding: 'utf8', 
        windowsHide: process.platform === 'win32',
        timeout: 5000 
      });
      
      console.log('Arduino CLI output:', output);
      const lines = output.split('\n');
      
      for (const line of lines) {
        if (line.includes('Arduino') || line.includes('Unknown')) {
          const parts = line.trim().split(/\s+/);
          if (parts.length >= 2 && (parts[0].includes('COM') || parts[0].includes('/dev/'))) {
            return {
              connected: true,
              port: parts[0],
              manufacturer: 'Arduino Device (CLI)',
              board: parts[2] || 'Unknown'
            };
          }
        }
      }
    } catch (cliError) {
      console.log("Arduino CLI detection failed:", cliError.message);
    }
    
    return { connected: false };
    
  } catch (error) {
    console.error("Arduino detection error:", error);
    return { connected: false, error: error.message };
  }
}

ipcMain.handle('detectArduino', async () => {
  return await detectArduinoDevice();
});

// Simplified listPorts that only returns Arduino devices
ipcMain.handle('listPorts', async () => {
  const result = await detectArduinoDevice();
  if (result.connected) {
    return [{
      path: result.port,
      manufacturer: result.manufacturer,
      isArduino: true,
      connected: true
    }];
  }
  return [];
});

// Enhanced compile and upload with device check
ipcMain.handle('compileAndUpload', async (event, { code, port, board = 'arduino:avr:uno' }) => {
  // First check if Arduino is connected
  const deviceStatus = await detectArduinoDevice();
  
  if (!deviceStatus.connected) {
    throw new Error('No Arduino device connected! Please connect your Arduino and try again.');
  }
  
  // Use detected port if not specified
  const targetPort = port || deviceStatus.port;
  
  if (!targetPort) {
    throw new Error('No valid port found for Arduino device.');
  }

  const { path: sketchDir, fileName } = createTempSketchDir();
  const sketchPath = path.join(sketchDir, fileName);
  const arduinoCliName = process.platform === 'win32' ? 'arduino-cli.exe' : 'arduino-cli';
  const arduinoCli = path.join(pathManager.getBinPath(), isDev ? arduinoCliName : arduinoCliName);

  try {
    // Clean up any existing temp directory
    const tempRoot = path.join(app.getPath('userData'), 'temp');
    if (fs.existsSync(tempRoot)) {
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }

    fs.mkdirSync(sketchDir, { recursive: true });
    fs.writeFileSync(sketchPath, code);

    return await new Promise((resolve, reject) => {
      let output = '';
      let errorOutput = '';

      // Send initial progress
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('compilation-progress', {
          percentage: 10,
          message: `Starting compilation for device on ${targetPort}...`
        });
      }

      const compileProcess = exec(
        `"${arduinoCli}" compile --fqbn ${board} "${sketchDir}"`,
        { windowsHide: process.platform === 'win32' }
      );

      compileProcess.stdout.on('data', (data) => {
        output += data;
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('compilation-progress', {
            percentage: 40,
            message: data.toString().trim()
          });
        }
      });

      compileProcess.stderr.on('data', (data) => {
        errorOutput += data;
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('compilation-progress', {
            percentage: 40,
            message: data.toString().trim(),
            isError: true
          });
        }
      });

      compileProcess.on('close', (compileCode) => {
        if (compileCode !== 0) {
          return reject(new Error(`Compilation failed:\n${errorOutput || output}`));
        }

        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('compilation-progress', {
            percentage: 70,
            message: 'Compilation successful! Uploading to Arduino...'
          });
        }

        const uploadProcess = exec(
          `"${arduinoCli}" upload -p ${targetPort} --fqbn ${board} "${sketchDir}"`,
          { windowsHide: process.platform === 'win32' }
        );

        uploadProcess.stdout.on('data', (data) => {
          output += data;
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('compilation-progress', {
              percentage: 90,
              message: data.toString().trim()
            });
          }
        });

        uploadProcess.stderr.on('data', (data) => {
          errorOutput += data;
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('compilation-progress', {
              percentage: 90,
              message: data.toString().trim(),
              isError: true
            });
          }
        });

        uploadProcess.on('close', (uploadCode) => {
          if (uploadCode !== 0) {
            return reject(new Error(`Upload failed:\n${errorOutput || output}`));
          }
          
          try {
            const sizePath = path.join(sketchDir, `${fileName}.size`);
            if (fs.existsSync(sizePath)) {
              const sizeInfo = fs.readFileSync(sizePath, 'utf8');
              output += '\n' + sizeInfo;
            }
          } catch (e) {
            console.log('Could not read size info:', e);
          }

          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('compilation-progress', {
              percentage: 100,
              message: 'Upload completed successfully!'
            });
          }

          resolve(output);
        });
      });
    });
  } catch (error) {
    throw error;
  } finally {
    try {
      if (fs.existsSync(sketchDir)) {
        fs.rmSync(sketchDir, { recursive: true, force: true });
      }
    } catch (e) {
      console.error('Cleanup error:', e);
    }
  }
});

ipcMain.handle('testSerialPort', async () => {
  try {
    console.log("Testing SerialPort library...");
    console.log("SerialPort object:", typeof SerialPort);
    console.log("SerialPort.list function:", typeof SerialPort.list);
    
    if (typeof SerialPort.list === 'function') {
      const ports = await SerialPort.list();
      console.log("SerialPort.list() result:", ports);
      return { success: true, portCount: ports.length, ports };
    } else {
      return { success: false, error: "SerialPort.list is not a function" };
    }
  } catch (error) {
    console.error("SerialPort test failed:", error);
    return { success: false, error: error.message };
  }
});