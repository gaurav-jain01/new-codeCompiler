import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import OutputTerminal from './components/OutputTerminal';
import Sessions from './components/Sessions';
import useAppData from './components/AppData';
import './App.css';

function App() {
  const {
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
    
    // Actions
    setSelectedPort,
    setCode,
    toggleTheme,
    fetchPorts,
    handleUpload,
    clearOutput,
    
    // Navigation
    goToSessions,
    goToCompiler,
    
    // Port management
    manualRefreshPorts,
    
    // Utility functions
    getStatusClass,
    getTerminalClass
  } = useAppData();

  // Draggable divider state
  const [terminalHeight, setTerminalHeight] = useState(300);
  const [isDragging, setIsDragging] = useState(false);
  const mainRef = useRef(null);

  const MIN_TERMINAL_HEIGHT = 150;
  const MAX_TERMINAL_HEIGHT = 500;

  // Calculate available height
  const [availableHeight, setAvailableHeight] = useState(window.innerHeight - 60);

  useEffect(() => {
    const updateHeight = () => {
      setAvailableHeight(window.innerHeight - 60);
    };
    
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleDividerMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);

    const startY = e.clientY;
    const startHeight = terminalHeight;

    const handleMouseMove = (e) => {
      const deltaY = startY - e.clientY;
      const newHeight = Math.max(
        MIN_TERMINAL_HEIGHT,
        Math.min(MAX_TERMINAL_HEIGHT, startHeight + deltaY)
      );
      setTerminalHeight(newHeight);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.body.style.cursor = 'ns-resize';
    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  if (currentView === 'sessions') {
    return (
      <Sessions onGoToCompiler={goToCompiler} />
    );
  }

  const editorHeight = availableHeight - terminalHeight - 4;

  return (
    <div className={`app-container ${theme} ${isDragging ? 'dragging' : ''}`}>
      <Header 
        ports={ports}
        selectedPort={selectedPort}
        setSelectedPort={setSelectedPort}
        handleUpload={handleUpload}
        isUploading={isUploading}
        toggleTheme={toggleTheme}
        theme={theme}
        refreshPorts={fetchPorts}
        manualRefreshPorts={manualRefreshPorts}
        isRefreshingPorts={isRefreshingPorts}
        goToSessions={goToSessions}
      />

      {/* Progress Bar - positioned absolutely to not affect layout */}
      {isProgressVisible && (
        <div className="progress-container visible">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}

      <main 
        ref={mainRef} 
        className="main-container-with-divider"
        style={{
          height: `calc(100vh - 60px)`,
          display: 'flex',
          flexDirection: 'column',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}
      >
        {/* Code Editor */}
        <div 
          className="editor-container"
          style={{ 
            height: `${editorHeight}px`,
          }}
        >
          <CodeEditor 
            code={code} 
            setCode={setCode} 
            theme={theme}
            handleUpload={handleUpload}
            isUploading={isUploading}
            ports={ports}
          />
        </div>

        {/* Draggable Divider */}
        <div 
          className={`horizontal-divider ${isDragging ? 'dragging' : ''}`}
          onMouseDown={handleDividerMouseDown}
        >
          <div className="divider-grip">
            <div className="grip-line"></div>
            <div className="grip-line"></div>
            <div className="grip-line"></div>
          </div>
        </div>

        {/* Terminal */}
        <div 
          className="terminal-container"
          style={{ 
            height: `${terminalHeight}px`,
          }}
        >
          <OutputTerminal 
            outputLines={outputLines}
            clearOutput={clearOutput}
            getTerminalClass={getTerminalClass}
            getStatusClass={getStatusClass}
            terminalHeight={terminalHeight}
          />
        </div>
      </main>
    </div>
  );
}

export default App;