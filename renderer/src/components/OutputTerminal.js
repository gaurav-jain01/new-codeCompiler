import React, { useState, useRef, useEffect } from 'react';
import { FiTrash2, FiMaximize2, FiMinimize2 } from 'react-icons/fi';

const OutputTerminal = ({ 
  outputLines, 
  clearOutput, 
  getTerminalClass, 
  getStatusClass,
  terminalHeight // Prop from App.js
}) => {
  const [clearAnimation, setClearAnimation] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const terminalRef = useRef(null);
  const terminalContentRef = useRef(null);

  // Auto-scroll to bottom when new output is added
  useEffect(() => {
    if (terminalContentRef.current && !isMinimized) {
      requestAnimationFrame(() => {
        terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
      });
    }
  }, [outputLines, isMinimized]);

  // Auto-scroll when terminal is expanded
  useEffect(() => {
    if (!isMinimized && terminalContentRef.current) {
      setTimeout(() => {
        terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
      }, 100);
    }
  }, [isMinimized]);

  const handleClear = () => {
    setClearAnimation(true);
    setTimeout(() => setClearAnimation(false), 300);
    clearOutput();
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // If a height is provided, use it; otherwise, make it flexible
  const currentHeight = terminalHeight || 300;

  return (
    <section 
      className={`output-section ${isMinimized ? 'minimized' : ''}`}
      ref={terminalRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Header */}
      <div className="output-header" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 10px',
        background: '#1e1e1e',
        color: '#fff'
      }}>
        <h2 className="output-title" style={{ margin: 0, fontSize: '14px' }}>
          <span className="terminal-prompt">_</span> Terminal
        </h2>
        <div className="header-controls" style={{ display: 'flex', gap: '8px' }}>
          <button 
            className={`clear-btn ${clearAnimation ? 'animate-pulse' : ''}`} 
            onClick={handleClear}
            title="Clear Terminal (Ctrl+L)"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px', 
              background: 'transparent', 
              border: 'none', 
              color: '#fff', 
              cursor: 'pointer' 
            }}
          >
            <FiTrash2 className="icon" />
            Clear
          </button>
          <button
            onClick={toggleMinimize}
            title={isMinimized ? 'Expand Terminal' : 'Minimize Terminal'}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#fff', 
              cursor: 'pointer' 
            }}
          >
            {isMinimized ? <FiMaximize2 /> : <FiMinimize2 />}
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div 
        className="section-content"
        style={{ 
          height: isMinimized ? 0 : `${currentHeight}px`,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
          background: '#111'
        }}
      >
        <div 
          className="terminal-content"
          ref={terminalContentRef}
          style={{
            height: '100%',
            overflowY: 'auto',
            padding: '8px 16px',
            fontSize: '13px',
            fontFamily: 'Monaco, Menlo, Ubuntu Mono, monospace',
            lineHeight: '1.4',
            color: '#ddd',
            boxSizing: 'border-box'
          }}
        >
          {outputLines.map(line => (
            <div key={line.id} className={getTerminalClass(line.type)}>
              {line.status && (
                <span className={`status-indicator ${getStatusClass(line.status)}`} />
              )}
              {line.message}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputTerminal;
