import React from 'react';

const ScorePage = () => {
  // Parsing from localStorage 
  const attemptsData = JSON.parse(localStorage.getItem('quizAttempts')) || {};
  const score = localStorage.getItem('score');
  const time = localStorage.getItem('timer');

  // Total time minus remaining time = completion time
  const completionTime = 300 - time

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Quiz Results</h1>
        <div className="flex justify-between mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Time Taken</p>
            <p className="text-2xl font-bold text-blue-600">{completionTime}s</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Final Score</p>
            <p className="text-2xl font-bold text-green-600">{score}/10</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Attempts</p>
            {/* Adding attepts  */}
            <p className="text-2xl font-bold text-yellow-600">{Object.values(attemptsData).reduce((a, b) => a + b, 0)}</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600">Overall Rating</p>
            <p className="text-2xl font-bold text-purple-600">
              {/* Rating calculation based on questions per attempts  */}
              {Math.round((parseInt(score) * 100 / Object.values(attemptsData).reduce((a, b) => a + b, 0)) * 100) / 100}%
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Attempts Per Question</h2>
        <div className="grid gap-4">
          {Object.entries(attemptsData).map(([question, attempts]) => (
            <div key={question} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-lg text-gray-700">
                Question {question} took <span className="font-semibold text-blue-600">{attempts} attempts</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
