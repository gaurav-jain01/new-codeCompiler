import React, { useState } from 'react';
import { FiCopy, FiClipboard, FiTrash2, FiPlay } from 'react-icons/fi';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, theme, handleUpload, isUploading, ports }) => {
  const [copyAnimation, setCopyAnimation] = useState(false);
  const [pasteAnimation, setPasteAnimation] = useState(false);
  const [clearAnimation, setClearAnimation] = useState(false);
  const [runAnimation, setRunAnimation] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopyAnimation(true);
        setTimeout(() => setCopyAnimation(false), 300);
        console.log('Code copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setCode(text);
      setPasteAnimation(true);
      setTimeout(() => setPasteAnimation(false), 300);
    } catch (err) {
      console.error('Failed to paste: ', err);
    }
  };

  const handleClear = () => {
    setCode('');
    setClearAnimation(true);
    setTimeout(() => setClearAnimation(false), 300);
  };

  const handleRun = () => {
    if (ports.length === 0) {
      alert('No device connected. Please connect a device first.');
      return;
    }
    setRunAnimation(true);
    setTimeout(() => setRunAnimation(false), 300);
    handleUpload();
  };

  return (
    <div className="editor-section">
      <div className="editor-toolbar">
        <button 
          onClick={handleCopy} 
          className={`toolbar-btn ${copyAnimation ? 'animate-pulse' : ''}`} 
          title="Copy Code"
        >
          <FiCopy className="icon" />
          Copy Code
        </button>
        <button 
          onClick={handlePaste} 
          className={`toolbar-btn ${pasteAnimation ? 'animate-pulse' : ''}`} 
          title="Paste Code"
        >
          <FiClipboard className="icon" />
          Paste Code
        </button>
        <button 
          onClick={handleClear} 
          className={`toolbar-btn ${clearAnimation ? 'animate-pulse' : ''}`} 
          title="Clear Editor"
        >
          <FiTrash2 className="icon" />
          Clear Editor
        </button>
        
      </div>
      <div className="section-content">
        <Editor
          height="100%"
          value={code}
          onChange={setCode}
          language="cpp"
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          options={{
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            lineNumbers: 'on',
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto'
            }
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;