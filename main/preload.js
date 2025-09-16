const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  compileAndUpload: (data) => ipcRenderer.invoke('compileAndUpload', data),
  listPorts: () => ipcRenderer.invoke('listPorts'),
  detectArduino: () => ipcRenderer.invoke('detectArduino'),
  testSerialPort: () => ipcRenderer.invoke('testSerialPort'),
  openDevTools: () => ipcRenderer.send('open-dev-tools'),
  onCompilationProgress: (callback) => {
    ipcRenderer.on('compilation-progress', (event, ...args) => callback(...args));
    return () => ipcRenderer.off('compilation-progress');
  }
});

// Add error handling for renderer
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});