import React, { useState } from 'react';
import { FiSun, FiMoon, FiRefreshCw, FiBookOpen, FiZap } from 'react-icons/fi';

const Header = ({ 
  ports, 
  selectedPort, 
  setSelectedPort, 
  handleUpload, 
  isUploading, 
  toggleTheme,
  theme,
  refreshPorts,
  manualRefreshPorts,
  isRefreshingPorts,
  goToSessions
}) => {
  const [themeAnimation, setThemeAnimation] = useState(false);
  const [refreshAnimation, setRefreshAnimation] = useState(false);
  const [sessionsAnimation, setSessionsAnimation] = useState(false);
  const [uploadAnimation, setUploadAnimation] = useState(false);

  const handleThemeToggle = () => {
    setThemeAnimation(true);
    setTimeout(() => setThemeAnimation(false), 300);
    toggleTheme();
  };

  const handleRefreshPorts = () => {
    setRefreshAnimation(true);
    setTimeout(() => setRefreshAnimation(false), 300);
    manualRefreshPorts();
  };

  const handleGoToSessions = () => {
    setSessionsAnimation(true);
    setTimeout(() => setSessionsAnimation(false), 300);
    goToSessions();
  };

  const handleUploadClick = () => {
    if (ports.length === 0) {
      alert('No device connected. Please connect a device first.');
      return;
    }
    setUploadAnimation(true);
    setTimeout(() => setUploadAnimation(false), 300);
    handleUpload();
  };

  // Extract just the port name (e.g., COM1, COM2) for display
  const getPortDisplayName = (portPath) => {
    if (!portPath) return '';
    // Extract just the port name from the full path
    const portName = portPath.split('/').pop() || portPath.split('\\').pop() || portPath;
    return portName;
  };

  return (
    <header>
      <div className="header-title">
        <img src={`${process.env.PUBLIC_URL}/logo1921.png`} alt="CYE Logo" className="header-logo w-48 h-48" />
        <h1>CYE Uploader</h1>
      </div>
      <div className="header-controls">
        <div className="port-section">
          <span className="port-label">Port:</span>
          <select 
            value={selectedPort} 
            onChange={(e) => setSelectedPort(e.target.value)}
            className="port-selector"
            disabled={ports.length === 0}
          >
            {ports.length === 0 ? (
              <option value="">No Device Connected</option>
            ) : (
              ports.map(port => (
                <option key={port.path} value={port.path}>
                  {getPortDisplayName(port.path)}
                </option>
              ))
            )}
          </select>
          
          {/* Port Refresh Button */}
          <button 
            onClick={handleRefreshPorts} 
            className={`refresh-btn ${refreshAnimation ? 'animate-spin' : ''}`}
            disabled={isRefreshingPorts}
            title="Refresh ports (manual)"
          >
            <FiRefreshCw className="icon" />
          </button>
        </div>
        
        <div className="session-controls">
          <button 
            onClick={handleGoToSessions}
            className={`btn btn-secondary ${sessionsAnimation ? 'animate-pulse' : ''}`}
            title="View learning examples and curriculum"
          >
            <FiBookOpen className="icon" />
            Learning Sessions
          </button>
        </div>
        
        <div className="theme-toggle">
          <button 
            onClick={handleThemeToggle} 
            className={`theme-btn ${themeAnimation ? 'animate-pulse' : ''}`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun className="icon" /> : <FiMoon className="icon" />}
          </button>
        </div>
        
        <button 
          onClick={handleUploadClick}
          className={`btn btn-primary ${uploadAnimation ? 'animate-pulse' : ''} ${isUploading ? 'uploading' : ''}`}
          disabled={isUploading || ports.length === 0}
          title="Compile and upload code to device"
        >
          <FiZap className="icon" />
          Compile & Upload
        </button>
      </div>
    </header>
  );
};

export default Header;