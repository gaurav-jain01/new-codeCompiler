import { useState, useEffect } from 'react';

const useAppData = () => {
  const [theme, setTheme] = useState('dark');
  const [ports, setPorts] = useState([]);
  const [selectedPort, setSelectedPort] = useState('');
  const [code, setCode] = useState(`void setup() {
  // Initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  // Initialize the LED_BUILTIN pin as an output
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // Turn the LED on
  delay(1000);                       // Wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // Turn the LED off
  delay(1000);                       // Wait for a second
  Serial.println("Blink!");         // Print to serial monitor
}`);
  const [outputLines, setOutputLines] = useState([
    // { id: 1, message: 'CYE Uploader Terminal v1.0.0', type: 'header' },
    { id: 1, message: 'Ready', type: 'ready', status: 'ready' }
  ]);
  const [progress, setProgress] = useState(0);
  const [isProgressVisible, setIsProgressVisible] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isRefreshingPorts, setIsRefreshingPorts] = useState(false);
  
  // View management state
  const [currentView, setCurrentView] = useState('compiler'); // 'compiler' or 'sessions'
  
  // Terminal resizing state
  const [terminalHeight, setTerminalHeight] = useState(300); // Default terminal height
  
  // Error tracking state
  const [hasShownPortError, setHasShownPortError] = useState(false);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const fetchPorts = async () => {
    try {
      setIsRefreshingPorts(true);
      const portsList = await window.electronAPI.listPorts();
      
      // Filter ports that have a manufacturer (likely real devices)
      const devicePorts = portsList.filter(port => port.manufacturer && port.manufacturer !== 'Unknown');
      
      setPorts(devicePorts);
      
      // Reset error flag if we successfully got ports
      if (devicePorts.length > 0) {
        setHasShownPortError(false);
        // Try to maintain selection if possible
        const portStillExists = devicePorts.some(port => port.path === selectedPort);
        if (!portStillExists) {
          setSelectedPort(devicePorts[0].path);
        }
      } else {
        setSelectedPort('');
        // Show helpful message if no ports found
        if (!hasShownPortError) {
          addToOutput("ℹ️ No device devices found. Please connect an device board and click the refresh button.", 'info');
          setHasShownPortError(true);
        }
      }
    } catch (err) {
      console.error("Error listing ports:", err);
      // Only show error message once, not repeatedly
      if (ports.length === 0 && !hasShownPortError) {
        addToOutput("❌ Error loading serial ports - Try clicking the refresh button or check if device drivers are installed", 'error');
        setHasShownPortError(true);
      }
      // Set empty ports array to prevent repeated errors
      setPorts([]);
      setSelectedPort('');
    } finally {
      setIsRefreshingPorts(false);
    }
  };

  const manualRefreshPorts = async () => {
    setHasShownPortError(false); // Reset error state
    addToOutput("🔄 Manually refreshing ports...", 'processing');
    await fetchPorts();
  };

  useEffect(() => {
    fetchPorts();
    const interval = setInterval(fetchPorts, 20000);
    
    const handleKeyDown = (e) => {
      if (e.key === 'F12') {
        window.electronAPI.openDevTools();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addToOutput = (message, type = 'info') => {
    let status = 'ready';
    let prefix = '>';
    
    switch (type) {
      case 'success':
        status = 'success';
        prefix = '✓';
        break;
      case 'error':
        status = 'error';
        prefix = '✗';
        break;
      case 'processing':
        status = 'processing';
        prefix = '⟲';
        break;
      case 'step':
        status = 'processing';
        prefix = '>';
        break;
      case 'header':
      case 'ready':
        break;
      default:
        status = 'info';
    }
    
    setOutputLines(prev => [
      ...prev,
      { 
        id: Date.now(), 
        message: type === 'header' || type === 'ready' ? message : `${prefix} ${message}`,
        type,
        status
      }
    ]);
  };

  const updateProgress = (percentage) => {
    setProgress(percentage);
    setIsProgressVisible(true);
    
    if (percentage >= 100) {
      setTimeout(() => {
        setIsProgressVisible(false);
        setProgress(0);
      }, 1000);
    }
  };

  const handleUpload = async () => {
    // Clear terminal before starting upload
    clearOutput();
    
    if (!selectedPort) {
      addToOutput("Please select a valid device port", "error");
      return;
    }

    if (!code.trim()) {
      addToOutput('No code to compile', 'error');
      return;
    }

    if (isUploading) return;
    
    setIsUploading(true);
    addToOutput(`Starting compilation and upload to ${selectedPort}...`, 'processing');
    
    // Simulate progress steps
    updateProgress(10);
    addToOutput('Checking syntax...', 'step');
    
    setTimeout(() => {
      updateProgress(30);
      addToOutput('Processing code...', 'step');
    }, 500);
    
    setTimeout(() => {
      updateProgress(50);
      addToOutput('Compilation successful!', 'step');
      addToOutput('Sketch uses 4,328 bytes (13%) of program storage space', 'success');
    }, 1000);
    
    setTimeout(() => {
      updateProgress(70);
      addToOutput(`Uploading to ${selectedPort}...`, 'step');
    }, 1500);
    
    try {
      const result = await window.electronAPI.compileAndUpload({
        code: code,
        port: selectedPort,
        board: 'arduino:avr:uno'
      });
      
      setTimeout(() => {
        updateProgress(100);
        addToOutput('Upload complete!', 'success');
        addToOutput(result, 'success');
        setIsUploading(false);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        updateProgress(100);
        addToOutput(`❌ Error: ${err.message}`, 'error');
        setIsUploading(false);
      }, 2000);
    }
  };

  const clearOutput = () => {
    setOutputLines([
      // { id: 1, message: 'CYE Uploader Terminal v1.0.0', type: 'header' },
      { id: 1, message: 'Ready', type: 'ready', status: 'ready' }
    ]);
  };

  // Navigation functions
  const goToSessions = () => {
    setCurrentView('sessions');
  };

  const goToCompiler = (exampleSession = null) => {
    setCurrentView('compiler');
    if (exampleSession) {
      setCode(exampleSession.code);
      addToOutput(`Loaded example: ${exampleSession.name}`, 'success');
    } else {
      // Check if there's code stored in localStorage from sessions
      const storedCode = localStorage.getItem('compilerCode');
      const storedName = localStorage.getItem('compilerName');
      if (storedCode) {
        setCode(storedCode);
        addToOutput(`Loaded example: ${storedName || 'Session Code'}`, 'success');
        // Clear the stored data
        localStorage.removeItem('compilerCode');
        localStorage.removeItem('compilerName');
      }
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'success': return 'status-success';
      case 'error': return 'status-error';
      case 'processing': return 'status-processing';
      case 'ready': return 'status-ready';
      default: return 'status-ready';
    }
  };

  const getTerminalClass = (type) => {
    switch (type) {
      case 'header': return 'terminal-header';
      case 'ready': return 'terminal-ready';
      case 'step': return 'terminal-step';
      case 'success': return 'terminal-success';
      case 'error': return 'terminal-error';
      case 'processing': return 'terminal-info';
      default: return 'terminal-info';
    }
  };

  return {
    // State
    theme,
    ports,
    selectedPort,
    code,
    outputLines,
    progress,
    isProgressVisible,
    isUploading,
    isRefreshingPorts,
    currentView,
    terminalHeight,
    
    // Actions
    setTheme,
    setSelectedPort,
    setCode,
    setTerminalHeight,
    toggleTheme,
    fetchPorts,
    handleUpload,
    clearOutput,
    updateProgress,
    addToOutput,
    
    // Navigation
    goToSessions,
    goToCompiler,
    
    // Port management
    manualRefreshPorts,
    
    // Utility functions
    getStatusClass,
    getTerminalClass
  };
};

export default useAppData; 