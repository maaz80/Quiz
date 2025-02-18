import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import ScorePage from "./pages/ScorePage";
import ScoreBoardPage from "./pages/ScoreBoardPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 poppins-regular">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/scoreboardpage" element={<ScoreBoardPage/>} />
          <Route path="/scorepage" element={<ScorePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
