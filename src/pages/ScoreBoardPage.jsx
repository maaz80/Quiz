import { useState, useEffect } from "react";
import { getAttempts } from "../utils/indexedDB";
import ScoreBoard from "../components/ScoreBoard";

const ScoreBoardPage = () => {
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const fetchAttempts = async () => {
      const data = await getAttempts();
      setAttempts(data);
    };
    fetchAttempts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ScoreBoard/>
    </div>
  );
};

export default ScoreBoardPage;
