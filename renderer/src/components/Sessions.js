import React, { useRef, useEffect, useState } from "react";
import { FiCopy, FiCheck, FiRefreshCw } from "react-icons/fi";
import lessons from "./ironmanClasses";
import Basicfunctions from "./Basicfunctions";
import QnASection from './QnAsection';
import diyQnA from "./QnA_Data";
import ChallengeBadgesBar from "./Bagdes";
import BottomNavigation from "./Next_Prev_button";

export default function Sessions({ onGoToCompiler }) {
  const [showPortMap, setShowPortMap] = useState(false);
  const [showCode, setShowCode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [currentCode, setCurrentCode] = useState(""); // <-- Add this state
  

  const handleOpenVideo = (videoUrl) => {
    if (videoUrl && typeof videoUrl === 'string') {
      window.open(videoUrl, '_blank');
    } else {
      alert('Video link not available');
    }
  };

  const lessonsWithDIY = [];
  let diyIndex = 0;

  lessons.forEach((lesson, index) => {
    lessonsWithDIY.push({ ...lesson, type: 'class' });

    // After every 5 lessons, insert a DIY
    if ((index + 1) % 5 === 0 && diyQnA[diyIndex]) {
      lessonsWithDIY.push({
        classNum: `${lessonsWithDIY.length + 1} DIY`,
        title: 'DIY QnA Challenge',
        icon: '🧠',
        type: 'diy',
        diyData: diyQnA[diyIndex]
      });
      diyIndex++;
    }
  });

  const handleStartCoding = () => {
  // Copy the current code to clipboard
  navigator.clipboard.writeText(currentCode)
    .then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
      
      // Open compiler with the current code
      goToCompiler({
        code: currentCode,
        name: selectedLesson.title || 'DIY Challenge'
      });
    })
    .catch(err => {
      console.error('Failed to copy code:', err);
      // Fallback copy method
      const textArea = document.createElement('textarea');
      textArea.value = currentCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      // Open compiler
      goToCompiler({
        code: currentCode,
        name: selectedLesson.title || 'DIY Challenge'
      });
    });
};

  const [completedLessons, setCompletedLessons] = useState(() => {
    const stored = localStorage.getItem('completedLessons');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('completedLessons')) || [];
    setCompletedLessons(stored);
  }, []);

  // Extract DIYs that are marked completed
  const completedDIYs = lessonsWithDIY
    .filter((lesson) => lesson.type === 'diy' && completedLessons.includes(lesson.classNum))
    .map((_, idx) => idx + 1);

  const toggleLessonComplete = () => {
    const updated = completedLessons.includes(selectedClass)
      ? completedLessons.filter(num => num !== selectedClass)
      : [...completedLessons, selectedClass];
    setCompletedLessons(updated);
    localStorage.setItem('completedLessons', JSON.stringify(updated));
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedLesson.code.trim())
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch(err => {
        console.error('Failed to copy code:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = selectedLesson.code.trim();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      });
  };

  // New: Copy and Open in Compiler for normal lessons
  const handleCopyAndOpenCompiler = () => {
    navigator.clipboard.writeText(selectedLesson.code.trim())
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
        // Open compiler with the copied code
        goToCompiler({
          code: selectedLesson.code.trim(),
          name: selectedLesson.title || `Lesson ${selectedClass}`
        });
      })
      .catch(err => {
        console.error('Failed to copy code:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = selectedLesson.code.trim();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
        // Open compiler with the copied code
        goToCompiler({
          code: selectedLesson.code.trim(),
          name: selectedLesson.title || `Lesson ${selectedClass}`
        });
      });
  };

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const portMap = [
    { title: 'Arc Radiator LED 1', port: 'D8', desc: "First glowing light on Ironman's chest arc reactor" },
    { title: 'Arc Radiator LED 2', port: 'D2', desc: 'Second light on arc reactor — helps power up' },
    { title: 'Arc Radiator LED 3', port: 'D10', desc: 'Third glowing arc reactor light' },
    { title: 'Arc Radiator LED 4', port: 'D11', desc: 'Fourth arc light — keeps the power glowing' },
    { title: 'Arc Radiator LED 5', port: 'D12', desc: "Fifth light — part of Ironman's arc core" },
    { title: 'Arc Radiator LED 6', port: 'D13', desc: 'Final arc light — all six power his suit!' },
    { title: 'Hands & Legs LED (Flying Effect)', port: 'D3', desc: "Lights up legs and hands like he's flying" },
    { title: 'RGB LED (Middle of Arc Reactor)', port: 'D5, D6, D9', desc: "Another pin controlling the color light in Ironman's arc" },
    { title: 'Laser Diode (Hand)', port: 'D4', desc: 'Fires red laser from his hand in battle' },
    { title: 'Eyes LED', port: 'D7', desc: `'Lights up Ironman's eyes when he's active'` },
    { title: 'Extra Peripheral (Right Shoulder)', port: 'A4, A5', desc: `'External tool or addon on Ironman's shoulder'` },
    { title: 'Extra Peripheral (Left Shoulder)', port: 'D5, D6', desc: 'Another port for shoulder gadget like rocket or sensor' },
    { title: 'IR Sensor Motion Detects (Left Hand)', port: 'A6', desc: 'Sees enemies or objects in front of Ironman' },
    { title: 'Push Button (Right Leg)', port: 'A0', desc: "Press to activate Ironman's left-hand actions" },
    { title: 'Push Button (Left Leg)', port: 'A1', desc: 'Press to control right-hand gadgets or power' },
  ];

  const [selectedClass, setSelectedClass] = useState(() => {
    const stored = localStorage.getItem('selectedClass');
    return stored ? JSON.parse(stored) : 1;
  });
  const selectedLesson = lessonsWithDIY.find(l => l.classNum === selectedClass);
  const bgClass = selectedLesson ? selectedLesson.color : 'from-purple-100 to-blue-100';
  const progressPercent = Math.round((completedLessons.length / lessons.length) * 100);

  const stepsRef = useRef(null);
  const codeRef = useRef(null);
  const diyRef = useRef(null);
  const [sideHeight, setSideHeight] = useState(0);

  useEffect(() => {
    if (selectedLesson?.type === "diy" && selectedLesson.diyData?.code) {
      setCurrentCode(selectedLesson.diyData.code.trim());
    } else if (selectedLesson?.code) {
      setCurrentCode(selectedLesson.code.trim());
    } else {
      setCurrentCode("");
    }
  }, [selectedLesson]);

  const currentIndex = lessonsWithDIY.findIndex(l => l.classNum === selectedClass);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedClass(lessonsWithDIY[currentIndex - 1].classNum);
    }
  };

  const handleNext = () => {
    if (currentIndex < lessonsWithDIY.length - 1) {
      setSelectedClass(lessonsWithDIY[currentIndex + 1].classNum);
    }
  };

  const goToCompiler = (exampleSession = null) => {
    // Use the prop function to navigate to compiler
    if (onGoToCompiler) {
      onGoToCompiler(exampleSession);
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedClass', JSON.stringify(selectedClass));
  }, [selectedClass]);

  return (
    <div className="bg-main text-main min-h-screen scrollbar-hide">
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      {/* Header */}
      <div
        className="flex flex-col md:flex-row md:justify-between md:items-center border-b-2 border-gray-400 px-6 py-2 sticky top-0 z-10 bg-white"
        style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
      >
        {/* Logo + Name */}
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="Logo"
            className="w-16 h-14 md:w-20 md:h-16 rounded-lg"
          />
          <span className="text-2xl md:text-3xl font-bold text-purple-600 mt-2 md:mt-0">
            CYE
          </span>
        </div>

        {/* Title */}
        <div className="w-full md:w-auto text-center my-2 md:my-0">
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700">
              🤖 Ironman Learning Sessions
            </span>
          </div>

        {/* Buttons */}
        <div className="flex justify-center mt-3 md:mt-0 space-x-4">
          <button
            onClick= {() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded shadow"
          >
            <span className="hidden md:inline">{theme === 'dark' ? '🌞' : '🌙'}</span>
            <span className="md:hidden">
              {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </span>
          </button>
          <button
            onClick={() => goToCompiler()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow text-sm"
            title="Go to Previous Compiler Code"
          >
            ⚡ CODE 
          </button>
        </div>
      </div>


      {/* Main Content */}
      <div className="bg-main px-4 py-6 font-sans scrollbar-hide" 
           style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
        
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-6 animate-fade-in"
             style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
          
          {/* Header */}
          <div className="text-center">
            <div className="gap-4 flex justify-center items-center mb-2 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-3xl">🤖</span>
              </div>
              <h1 className="text-2xl bg-red-600 md:text-4xl md:p-3 p-0 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                Ironman Learning Curriculum
              </h1>
            </div>

            <p className="text-lg p-2 mb-6" style={{ color: 'var(--text-secondary)' }}>
              Learn to code with Ironman! Build amazing projects and become a superhero programmer! 🚀✨
            </p>

            {/* Progress */}
            <div className="mb-6">
              <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Progress</p>
              <div className="w-full bg-purple-200 h-3 rounded-full">
                <div
                  className="bg-purple-500 h-3 rounded-full transition-all duration-700 ease-in-out"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                {progressPercent}% Complete
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => window.open('https://youtu.be/Ag8S3xuw68I?si=ij50nJmknkdDUZps', '_blank')}
              className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-xl w-full flex items-center justify-center space-x-2 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M15 10L20 7V17L15 14M4 7H14V17H4V7Z" />
              </svg>
              <span>Port Mapping: Step-by-Step Video</span>
            </button>

            <button
              onClick={() => setShowPortMap(!showPortMap)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium px-6 py-3 rounded-lg w-full flex items-center justify-center space-x-2 shadow hover:shadow-xl transition"
            >
              <span className="text-lg">⚙️</span>
              <span>{showPortMap ? 'Hide Ironman Port Map' : 'Show Ironman Port Map'}</span>
            </button>
          </div>

          {/* Port Map */}
          {showPortMap && (
            <div className="mt-6 rounded-lg border border-gray-200 p-4 shadow-md"
                 style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
              <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2"
                  style={{ color: 'var(--text-main)' }}>
                <span className="text-green-500">🧩</span>
                <span>What's Connected Where? – Full Ironman Port Map</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portMap.map((item, idx) => (
                  <div key={idx}
                       className="rounded-lg p-4 border shadow hover:shadow-lg transition duration-300"
                       style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500 text-xl">💡</span>
                        <h3 className="font-bold text-sm" style={{ color: 'var(--text-main)' }}>
                          {item.title}
                        </h3>
                      </div>
                      <span className="bg-gray-200 text-xs font-semibold px-2 py-1 rounded-full"
                            style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-secondary)' }}>
                        {item.port}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Basic Functions */}
        <div>
          <Basicfunctions />
        </div>

        {/* Lessons Section - Fixed Layout Grid */}
        <div className="mt-10 max-w-6xl mx-auto bg-white shadow-xl rounded-xl animate-fade-in"
             style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen">
            
            {/* Sidebar - Lessons List - Fixed Width Column */}
            <div className="lg:col-span-1 border-gray-200" >
              <div className="sticky top-24 h-screen overflow-hidden flex flex-col">
                <div className="p-4 mt-[6px] border-b border-gray-200" style={{ borderColor: 'var(--border-color)' }}>
                  <h2 className="text-lg font-bold p-3 rounded-lg border flex items-center justify-between"
                      style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⭐</span>
                      <span className="text-sm">Lessons</span>
                    </div>
                    <button
                      onClick={() => {
                        const confirmReset = window.confirm(
                          "Do you want to restart your learning journey? This will clear your progress."
                        );
                        if (confirmReset) {
                          setCompletedLessons([]);
                          localStorage.removeItem('completedLessons');
                        }
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded text-xs transition"
                    >
                      🔁
                    </button>
                  </h2>
                </div>

                <div className="flex-1 overflow-y-auto p-4 mt-4">
                <div className="space-y-2">
                    {lessonsWithDIY.map((lesson) => (
                      <div
                        key={lesson.classNum}
                        onClick={() => setSelectedClass(lesson.classNum)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg font-medium cursor-pointer shadow-sm transition-all duration-200 h-16
                          ${
                            selectedClass === lesson.classNum
                              ? 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white'
                              : completedLessons.includes(lesson.classNum)
                              ? lesson.type === 'diy'
                                ? 'bg-gradient-to-r from-green-500 to-red-500 text-white'
                                : 'bg-gradient-to-r from-red-400 to-pink-500 text-white'
                              : lesson.type === 'diy'
                              ? 'bg-yellow-100 text-yellow-900 hover:bg-yellow-200'
                              // ✅ Now uses --bg-card variable for default state
                              : 'text-gray-700 hover:opacity-90'
                          }`}
                        style={
                          selectedClass !== lesson.classNum &&
                          !completedLessons.includes(lesson.classNum) &&
                          lesson.type !== 'diy'
                            ? { backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }
                            : {}
                        }
                      >
                        <span className="text-lg flex-shrink-0">{lesson.icon}</span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-semibold truncate">
                            Class {lesson.classNum}
                          </div>
                          <div className="text-xs opacity-80 truncate leading-tight">
                            {lesson.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Main Content Area - Fixed Width Column */}
            <div className="lg:col-span-3">
              <div className="h-screen overflow-y-auto p-6">
                {selectedLesson?.type === 'diy' ? (
                  <div ref={diyRef} className="space-y-6">
                    <QnASection 
                      challenge={selectedLesson.diyData} 
                      openCompilerWithCode={(code) => goToCompiler({
                        code: code,
                        name: selectedLesson.title || 'DIY Challenge'
                      })}
                      currentCode={currentCode}
                      setCurrentCode={setCurrentCode}
                    />
                    <div className="border rounded-lg p-4"
                         style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                      <BottomNavigation
                        currentIndex={currentIndex}
                        lessonsWithDIY={lessonsWithDIY}
                        selectedClass={selectedClass}
                        completedLessons={completedLessons}
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        toggleLessonComplete={toggleLessonComplete}
                        selectedLesson={selectedLesson}
                        goToCompiler={goToCompiler}
                        currentCode={currentCode}
                        handleStartCoding={handleStartCoding}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Class Header - Fixed Height */}
                    <div className="p-6 rounded-xl shadow-md min-h-[200px] flex flex-col"
                         style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                        <div className="flex-1">
                          <h2 className="text-xl font-bold mb-2 line-clamp-2"
                              style={{ color: 'var(--text-main)' }}>
                            👀 Class {selectedLesson.classNum}: {selectedLesson.moretitle}
                          </h2>
                          <div className="mb-4">
                            <div className="font-semibold text-base text-purple-700 mb-2">Visual Idea:</div>
                            <div className="text-base text-purple-700 line-clamp-3">{selectedLesson.description}</div>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                          Easy
                        </span>
                      </div>

                      {/* Badges - Fixed Height */}
                      <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
                        {selectedLesson.badges?.map((badge, idx) => (
                          <span key={idx}
                                className="border text-xs px-3 py-2 rounded-full font-medium"
                                style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', borderColor: 'var(--border-color)' }}>
                            {badge}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleOpenVideo(selectedLesson.video)}
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-yellow-500 hover:to-green-400 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-xl w-full shadow-md hover:shadow-xl flex items-center justify-center space-x-3 mt-auto"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="M5 3L19 12L5 21V3Z" />
                        </svg>
                        <span>Watch Video</span>
                      </button>
                    </div>

                    {/* Ironman's Story - Fixed Height */}
                    <div className="border rounded-xl p-6 min-h-[120px]"
                         style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                      <h3 className="text-lg font-semibold text-orange-800 flex items-center gap-2 mb-4">
                        📖 Ironman's Story
                      </h3>
                      <p className="text-base text-orange-700 italic leading-relaxed line-clamp-4">
                        {selectedLesson.story}
                      </p>
                    </div>

                    {/* Magic Code - Fixed Structure */}
                    <div ref={codeRef}>
                      <div className="rounded-xl shadow-xl border p-6 overflow-hidden"
                           style={{ backgroundColor: 'var(--code-bg)', borderColor: 'var(--border-color)' }}>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-bold text-yellow-600 flex items-center gap-2">
                            <span>💡</span> The Magic Code
                          </h3>
                          <div className="flex items-center gap-2">
                            {/* Copy Button */}
                            <div className="relative group">
                              <button
                                onClick={handleCopyCode}
                                className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg shadow transition flex items-center gap-1 text-sm"
                              >
                                <FiCopy /> {copied ? "Copied!" : "Copy"}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 overflow-x-auto max-h-96 scrollbar-hide">
                          <pre className="whitespace-pre-wrap break-words">{selectedLesson.code?.trim()}</pre>
                        </div>
                      </div>
                    </div>

                    {/* Steps - Consistent Structure */}
                    <div ref={stepsRef}>
                      <div className="border rounded-xl shadow-inner p-6"
                           style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                        <h3 className="text-xl font-bold text-purple-600 mb-6">
                          💡 Step-by-Step Superhero Action!
                        </h3>

                        <div className="space-y-4 scrollbar-hide">
                          {selectedLesson.steps?.map((step, idx) => (
                            <div key={idx}
                                 className="rounded-md p-4 shadow-sm min-h-[80px] flex"
                                 style={{ backgroundColor: 'var(--bg-main)' }}>
                              <div className="flex items-start gap-4 w-full">
                                <div className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                  {idx + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-blue-800 mb-2">{step.title}</h4>
                                  <div className="space-y-2 text-sm" style={{ color: 'var(--text-main)' }}>
                                    {step.narration && (
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 flex-shrink-0">➤</span>
                                        <span className="break-words">{step.narration}</span>
                                      </div>
                                    )}
                                    {step.arduino && (
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 flex-shrink-0">➤</span>
                                        <code className="text-main font-mono px-1 rounded break-all flex-1 font-medium">
                                          {step.arduino}
                                        </code>
                                      </div>
                                    )}
                                    {step.commentary && (
                                      <div className="flex items-start gap-2">
                                        <span className="text-blue-500 flex-shrink-0">➤</span>
                                        <span className="italic text-main break-words">{step.commentary}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Navigation */}
                        <div className="mt-8">
                        <BottomNavigation
                          currentIndex={currentIndex}
                          lessonsWithDIY={lessonsWithDIY}
                          selectedClass={selectedClass}
                          completedLessons={completedLessons}
                          handlePrev={handlePrev}
                          handleNext={handleNext}
                          toggleLessonComplete={toggleLessonComplete}
                          selectedLesson={selectedLesson}
                          goToCompiler={goToCompiler}
                          currentCode={currentCode}
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}