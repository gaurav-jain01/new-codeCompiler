import React, { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiRefreshCw } from "react-icons/fi";
// import NextPrevButton from "./Next_Prev_button";

export default function QnASection({ challenge, openCompilerWithCode }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const storageKey = `qna_${challenge.id}_quiz`;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved) {
      setUserAnswers(saved.answers || {});
      setIsSubmitted(saved.submitted || false);
    }
  }, [challenge.id]);

  const handleOptionChange = (qIndex, selectedOption) => {
    if (isSubmitted) return;
    const updatedAnswers = { ...userAnswers, [qIndex]: selectedOption };
    setUserAnswers(updatedAnswers);
    localStorage.setItem(storageKey, JSON.stringify({ answers: updatedAnswers, submitted: false }));
  };


  const arduinoBoilerplate = `void setup() {\n  // put your setup code here, to run once:\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}`;
  const [editableCode, setEditableCode] = useState((challenge.code && challenge.code.trim()) ? challenge.code : arduinoBoilerplate);
  const [copied, setCopied] = useState(false);

  // Copy code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(editableCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch(err => {
        console.error('Failed to copy code:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = editableCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      });
  };

  // Reset code with confirmation
  const handleResetCode = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset the code to the original starter code? Your current changes will be lost."
    );
    if (confirmReset) {
      setEditableCode((challenge.code && challenge.code.trim()) ? challenge.code : arduinoBoilerplate);
    }
  };

  // New: Copy and Open in Compiler
  const handleCopyAndOpenCompiler = () => {
    navigator.clipboard.writeText(editableCode)
      .then(() => {
        if (openCompilerWithCode) {
          openCompilerWithCode(editableCode);
        } else {
          // fallback: store in localStorage and reload to compiler
          localStorage.setItem('compilerCode', editableCode);
          localStorage.setItem('compilerName', challenge.title || 'Starter Code');
          window.location.reload(); // or trigger navigation if available
        }
      })
      .catch(err => {
        console.error('Failed to copy code:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = editableCode;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (openCompilerWithCode) {
          openCompilerWithCode(editableCode);
        } else {
          // fallback: store in localStorage and reload to compiler
          localStorage.setItem('compilerCode', editableCode);
          localStorage.setItem('compilerName', challenge.title || 'Starter Code');
          window.location.reload(); // or trigger navigation if available
        }
      });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    localStorage.setItem(storageKey, JSON.stringify({ answers: userAnswers, submitted: true }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    localStorage.removeItem(storageKey);
  };

  const calculateScore = () => {
    let score = 0;
    challenge.quiz?.forEach((q, idx) => {
      if (userAnswers[idx] && userAnswers[idx].startsWith(q.answer)) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <>
      <div
        className="rounded-2xl shadow-2xl border-l-8 border-yellow-400 px-6 py-8 max-w-5xl border mx-auto my-12 animate-fade-in mt-0"
        style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <h2 className="text-3xl font-bold text-yellow-700 flex items-center gap-3">
            {challenge.icon} {challenge.title}
          </h2>
          <span className="bg-yellow-300 text-yellow-900 font-semibold px-3 py-1 text-sm rounded-full shadow-md">
            QnA Level: Superhero
          </span>
        </div>

        {/* Quote */}
        {challenge.quote && (
          <blockquote
            className="italic bg-orange-100 p-4 rounded-lg shadow mb-4"
            style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}
          >
            <div className="text-orange-600 text-xl font-semibold">🦾 Ironman Says:</div>
            <div className="ml-8 whitespace-pre-wrap">{challenge.quote}</div>
          </blockquote>
        )}

        {/* Recap Section */}
        {challenge.recap && (
          <div className="mb-6 border-l-4 border-blue-500 bg-red-400 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">📚 Quick Recap</h3>
            <ul className="list-disc pl-6 text-sm space-y-1">
              {challenge.recap.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Goal */}
        {challenge.goal && (
          <div className="p-4 mb-4 rounded-lg" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
            <div className="text-red-500 font-bold text-2xl">🎯 Goal</div>
            <p className="text-red-700 text-lg mb-6 italic ml-6">{challenge.goal}</p>
          </div>
        )}

        {/* Quiz */}
        {challenge.quiz && (
          <div className="p-4 rounded-lg mb-6 border border-yellow-500" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-yellow-400">🧠 Quiz Time</h3>
              {isSubmitted && (
                <div className="bg-green-600 text-white px-4 py-1 rounded-full font-semibold text-sm shadow">
                  🏆 Score: {calculateScore()} / {challenge.quiz.length}
                </div>
              )}
            </div>

            {challenge.quiz.map((q, idx) => (
              <div key={idx} className="mb-6 border border-gray-600 rounded-xl p-4 shadow-md" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
                <p className="font-semibold text-lg text-yellow-300 mb-2" >{idx + 1}. {q.question}</p>
                <div className="space-y-2" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
                  {q.options.map((opt, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer group " style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }} >
                      <input
                        type="checkbox"
                        name={`question-${idx}`}
                        checked={userAnswers[idx] === opt}
                        onChange={() => handleOptionChange(idx, opt)}
                        disabled={isSubmitted}
                        className="accent-yellow-400 w-5 h-5"
                      />
                      <span
                        className={`w-full text-sm px-2 py-1 rounded-md transition-all duration-200 ${isSubmitted && opt.startsWith(q.answer)
                          ? 'text-green-500 font-semibold border border-green-500'
                          : userAnswers[idx] === opt && isSubmitted
                            ? 'text-red-500 border border-red-500'
                            : 'text-green-400'
                          }`}
                        style={{
                          backgroundColor: 'var(--bg-main)',
                          color: 'var(--text-main)'
                        }}
                      >
                        {opt}
                      </span>

                    </label>
                  ))}
                </div>
                {isSubmitted && (
                  <p className="mt-2 text-sm italic text-green-400">✅ Correct Answer: {q.answer}</p>
                )}
              </div>
            ))}


            <div className="text-center mt-6 flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className={`${isSubmitted
                  ? 'bg-green-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-yellow-500 to-pink-500 hover:scale-105 hover:shadow-xl'
                  } text-white font-bold px-6 py-3 rounded-full shadow transition-all duration-300`}
              >
                {isSubmitted ? "✅ Submitted" : "🚀 Submit Answers"}
              </button>

              <button
                onClick={handleReset}
                disabled={!isSubmitted}
                className={`${isSubmitted
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-red-300 cursor-not-allowed'
                  } text-white font-bold px-6 py-3 rounded-full shadow transition`}
              >
                🔁 Reset Quiz
              </button>
            </div>
          </div>
        )}

        {/* Think Section */}
        {challenge.think && (
          <div className="border-l-4 border-yellow-500 p-4 rounded-lg mb-6" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
            <h3 className="text-lg font-semibold mb-2">🧠 Think Like a Superhero!</h3>
            <ul className="list-disc pl-6 space-y-1">
              {challenge.think.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges */}
        {challenge.challenges && (
          <div className="mb-6 rounded-xl shadow-inner p-4" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="grid gap-5">
              {challenge.challenges.map((c, i) => (
                <div key={i} className="rounded-lg shadow p-5 border-l-4 border-blue-400" style={{ backgroundColor: 'var(--bg-main)' }}>
                  <h3 className="font-bold text-blue-500 text-lg mb-1">🎯 {c.title}</h3>
                  {c.description && <p className="text-sm ml-2">➤ {c.description}</p>}
                  {c.bonus && <p className="text-sm italic text-blue-500 ml-2">➤ Bonus: {c.bonus}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {challenge.code && (
          <div className="relative bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-5 shadow-md border border-gray-700 mb-6">
            {/* Header with Buttons */}
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-yellow-400 font-bold text-lg flex items-center gap-2">
                💡 Starter Code
              </h4>
              <div className="flex items-center gap-3">
                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className="text-white hover:text-yellow-400 transition flex items-center gap-1 text-sm"
                  title="Copy Code"
                >
                  {copied ? (
                    <span className="flex items-center gap-1">
                      <FiCheck className="text-green-400" /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <FiCopy /> Copy
                    </span>
                  )}
                </button>
                {/* New: Copy & Open in Compiler Button */}
                <button
                  onClick={handleCopyAndOpenCompiler}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition flex items-center gap-1 text-sm"
                  title="Copy & Open in Compiler"
                >
                  <FiCopy /> Code
                </button>
                {/* Reset Button */}
                <button
                  onClick={handleResetCode}
                  className="text-white hover:text-red-400 transition flex items-center gap-1 text-sm"
                  title="Reset Code"
                >
                  <FiRefreshCw /> Reset
                </button>
              </div>
            </div>

            {/* Editable Area */}
            <textarea
              value={editableCode}
              onChange={(e) => setEditableCode(e.target.value)}
              className="w-full bg-gray-900 text-green-300 font-mono text-sm rounded-lg p-4 leading-relaxed border border-gray-700 resize-y min-h-[200px] outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="// Start coding..."
            />
          </div>
        )}

        {/* Tips Section */}
        {challenge.tips && (
          <div className="p-5 rounded-xl shadow-inner mb-6 border-none border-purple-200" style={{ backgroundColor: 'var(--bg-card)' }}>
            <h3 className="text-xl font-bold text-purple-500 mb-3">🔍 Quick Tips</h3>
            <ul className="space-y-3">

              {challenge.tips.map((tip, i) => (
                <div className="border-none rounded-lg p-4" style={{ backgroundColor: 'var(--bg-main)' }}>
                  <li key={i} >
                    <strong className="text-purple-500">{tip.title}:</strong>{' '}
                    <div className="flex">
                      <div className="w-fit">🧩</div>
                      {tip.content}</div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}

        {/* Wrap-Up */}
        {challenge.wrapup && (
          <div className="border-l-4 border-green-500 p-4 rounded-lg text-green-300 text-md italic shadow" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}>
            <div className="text-blue-500 font-semibold">🎉 Wrap-Up:</div>
            <div className="ml-6 whitespace-pre-wrap">{challenge.wrapup}</div>
          </div>
        )}
      </div>


      {/* <NextPrevButton /> */}
    </>
  );

}

