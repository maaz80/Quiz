import QuizForm from "../components/QuizForm";
import { sampleQuestions } from "../utils/sampleQuestions";
import { saveAttempt } from "../utils/indexedDB";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  // If quiz complete take you to score page 
  const handleQuizComplete = async (score) => {
    await saveAttempt({ score, date: new Date().toISOString() });
    navigate("/scorepage");
  };

  return (
    <div className="container mx-auto ">
      <QuizForm questions={sampleQuestions} onQuizComplete={handleQuizComplete} />
    </div>
  );
};

export default Quiz;
