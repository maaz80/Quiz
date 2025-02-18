import { useEffect, useState } from "react";
import Timer from "./Timer";

const QuizForm = ({ questions, onQuizComplete }) => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState({});
  // Removing prev data from local storage
  useEffect(() => {
    localStorage.removeItem('timer')
    localStorage.removeItem('score')
    localStorage.removeItem('quizAttempts')
  }, [])
  const [attempts, setAttempts] = useState({});

  // Checking if answer is correct or not
  const handleAnswer = (questionId, answer, isInputField = false) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));

    const question = questions.find(q => q.id === questionId);
    const wasCorrectBefore = answers[questionId] === question.correct;

    // Only increment attempts for non-input fields or when input field loses focus
    if (!isInputField) {
      setAttempts(prev => {
        const newAttempts = {
          ...prev,
          [questionId]: (prev[questionId] || 0) + 1
        };
        localStorage.setItem('quizAttempts', JSON.stringify(newAttempts));
        return newAttempts;
      });
    }

    // If answer is correct, increment score
    if (answer === question.correct) {
      setFeedback(prev => ({
        ...prev,
        [questionId]: "✅ Correct!"
      }));
      if (!wasCorrectBefore) {
        setScore(prev => prev + 1);
      }
    } else {
      setFeedback(prev => ({
        ...prev,
        [questionId]: "❌ Wrong!"
      }));
      if (wasCorrectBefore) {
        setScore(prev => prev - 1);
      }
    }
  };

  // Submit function 
  const handleSubmit = () => {
    onQuizComplete(score);
    localStorage.setItem('score', score);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg p-2 md:p-4 fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Timer timeLimit={30 * (questions.length)} onTimeUp={handleSubmit} className="text-xl font-bold" />
          <div className="text-xs md:text-xl font-bold">Score: {score}/{questions.length}</div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white text-sm md:text-base px-2 md:px-4 py-1 md:py-2 rounded-md hover:bg-blue-600"
          >
            Submit Quiz
          </button>
        </div>
      </nav>

      <div className="container mx-auto pt-20 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">Quiz Instructions</h1>
          <div className="space-y-2">
            <p>• Total Questions: {questions.length}</p>
            <p>• Time per Question: 30 seconds</p>
            <p>• All questions are compulsory</p>
            <p>• Each correct answer carries 1 mark</p>
            <p>• No negative marking for wrong answers</p>
          </div>
        </div>

        <div className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-blue-500 text-white w-7  flex items-center justify-center h-7 rounded-full">{question.id}</span>
                <div className="text-lg font-medium">{question.question}</div>
              </div>
              <div className="space-y-4">
                {/* Maping options  */}
                {question?.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(question.id, option)}
                    className={`w-full text-left p-3 rounded-md transition
                      ${answers[question.id] === option ?
                        (option === question.correct ? "bg-green-100 border-2 border-green-500" : "bg-red-100 border-2 border-red-500")
                        : "bg-gray-50 border-2 border-gray-200 hover:bg-gray-100"
                      }`}
                  >
                    {option}
                  </button>
                ))}
                {/* Input field if has*/}
                {question?.type && (
                  <input
                    type={question.type}
                    placeholder='Enter your answer'
                    className="w-full border-2 border-gray-200 rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none"
                    onChange={(e) => handleAnswer(question.id, e.target.value, true)}
                    onBlur={(e) => handleAnswer(question.id, e.target.value)}
                  />
                )}
                {/* Show instant feedback */}
                {feedback[question.id] && (
                  <p className="text-lg font-medium">{feedback[question.id]}</p>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizForm;