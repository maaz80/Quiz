import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import ScoreboardPage from "./pages/ScoreboardPage";
import ScorePage from "./pages/ScorePage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 poppins-regular">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/scoreboard" element={<ScoreboardPage/>} />
          <Route path="/scorepage" element={<ScorePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
