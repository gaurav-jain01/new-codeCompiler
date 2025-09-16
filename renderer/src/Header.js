import React from 'react';

const Header = ({ 
  ports, 
  selectedPort, 
  setSelectedPort, 
  handleUpload, 
  isUploading, 
  toggleTheme,
  theme
}) => {
  return (
    <header>
      <h1>CYE Uploader</h1>
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
              <option value="">No Device connected</option>
            ) : (
              ports.map(port => (
                <option key={port.path} value={port.path}>
                  {port.path} {port.manufacturer ? `(${port.manufacturer})` : ''}
                </option>
              ))
            )}
          </select>
        </div>
        
        <div className="theme-toggle">
          <button onClick={toggleTheme} className="theme-btn">
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'} Mode
          </button>
        </div>
        
        <button 
          onClick={handleUpload}
          className={`btn btn-primary ${isUploading ? 'uploading' : ''}`}
          disabled={isUploading || ports.length === 0}
        >
          <span>⚡</span>
          Compile & Upload
        </button>
      </div>
    </header>
  );
};

export default Header;