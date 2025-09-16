import React from "react";

export default function BottomNavigation({
    currentIndex,
    lessonsWithDIY,
    selectedClass,
    completedLessons,
    handlePrev,
    handleNext,
    toggleLessonComplete,
    selectedLesson,
    goToCompiler
}) {
    const handleStartCoding = () => {
        if (selectedLesson) {
            // If DIY, use diyData.code as starter code
            if (selectedLesson.type === 'diy' && selectedLesson.diyData && selectedLesson.diyData.code) {
                goToCompiler({
                    code: selectedLesson.diyData.code.trim(),
                    name: selectedLesson.title || `DIY Challenge`
                });
            } else if (selectedLesson.code) {
                goToCompiler({
                    code: selectedLesson.code.trim(),
                    name: selectedLesson.title || `Lesson ${selectedClass}`
                });
            } else {
                goToCompiler();
            }
        } else {
            goToCompiler();
        }
    };

    return (
        <div
            className="mt-6 flex flex-col md:flex-row gap-4 md:justify-between items-center px-2 py-2 border-none rounded-lg "
            style={{ backgroundColor: "var(--bg-main)" }}>
            <button
                className="bg-gray-800 text-white px-4 py-2 w-full md:w-fit rounded shadow hover:shadow-lg text-sm transition disabled:opacity-50"
                onClick={handlePrev}
                disabled={currentIndex <= 0}
            >
                ⬅️ Previous
            </button>

            <button
                className={`px-4 py-2 rounded text-sm shadow transition w-full md:w-fit ${completedLessons.includes(selectedClass)
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                onClick={toggleLessonComplete}
            >
                {completedLessons.includes(selectedClass)
                    ? " ✅ Complete"
                    : "⬜ Complete "}
            </button>

            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-full md:w-fit rounded shadow hover:shadow-lg text-sm transition disabled:opacity-50"
                onClick={handleNext}
                disabled={currentIndex >= lessonsWithDIY.length - 1}
            >
                Next ➡️
            </button>

            <button
                onClick={handleStartCoding}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-full md:w-fit rounded shadow hover:shadow-lg text-sm transition"
            >
                🚀 Start Coding
            </button>
        </div>
    );
}



/*
 <div ref={diyRef} class >
                  <QnASection challenge={selectedLesson.diyData} />
                  <BottomNavigation
                    currentIndex={currentIndex}
                    lessonsWithDIY={lessonsWithDIY}
                    selectedClass={selectedClass}
                    completedLessons={completedLessons}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                    toggleLessonComplete={toggleLessonComplete}
                  />

                </div>

want when the chsllenge complete , ts bg changes like as the class complets and its class bg chamges  in lessons side bar */