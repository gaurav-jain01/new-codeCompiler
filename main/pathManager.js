const path = require('path');
const fs = require('fs');
const { app } = require('electron');

const isDev = process.env.NODE_ENV === 'development';

function getCorePath() {
  return path.join(app.getPath('userData'), 'arduino-cli');
}

function findRendererPath() {
  // Development path
  if (isDev) {
    const devPath = path.join(app.getAppPath(), 'renderer', 'public');
    if (fs.existsSync(path.join(devPath, 'index.html'))) {
      return devPath;
    }
    throw new Error(`Dev renderer not found at: ${devPath}`);
  }

  // Production paths to check (order matters)
  const prodPaths = [
    path.join(process.resourcesPath, 'app.asar.unpacked', 'renderer', 'build'),
    path.join(process.resourcesPath, 'renderer', 'build'),
    path.join(process.resourcesPath, 'app', 'renderer', 'build'),
    path.join(__dirname, '..', 'renderer', 'build'),
    path.join(app.getAppPath(), 'renderer', 'build')
  ];

  for (const prodPath of prodPaths) {
    try {
      const indexPath = path.join(prodPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        console.log(`Found renderer at: ${prodPath}`);
        return prodPath;
      }
    } catch (err) {
      console.warn(`Path check skipped: ${prodPath}`, err);
    }
  }

  throw new Error(`
    Renderer not found! Checked locations:
    ${prodPaths.join('\n    ')}
    Current directory: ${process.cwd()}
    Resources path: ${process.resourcesPath}
    App path: ${app.getAppPath()}
    __dirname: ${__dirname}
  `);
}

function getBinPath() {
  if (isDev) {
    return path.join(app.getAppPath(), 'bin');
  }
  
  // Check production locations in order of preference
  const prodPaths = [
    // When using asarUnpack, files go to app.asar.unpacked
    path.join(process.resourcesPath, 'app.asar.unpacked', 'bin'),
    // Alternative locations
    path.join(process.resourcesPath, 'bin'),
    path.join(app.getAppPath(), 'bin'),
    // Fallback to app directory
    path.join(__dirname, '..', 'bin')
  ];

  for (const prodPath of prodPaths) {
    try {
      if (fs.existsSync(prodPath)) {
        console.log(`Found bin directory at: ${prodPath}`);
        return prodPath;
      }
    } catch (err) {
      console.warn(`Bin path check skipped: ${prodPath}`, err);
    }
  }

  throw new Error(`Bin directory not found in production! Checked: ${prodPaths.join(', ')}`);
}

module.exports = {
  getRendererPath: findRendererPath,
  getBinPath,
  getCorePath
};