import { useState, useEffect } from "react";
import { getAttempts } from "../utils/indexedDB";

const Scoreboard = () => {
  const [attempts, setAttempts] = useState([]);

  // Fetching data from indexedDB
  useEffect(() => {
    const fetchAttempts = async () => {
      const data = await getAttempts();
      setAttempts(data);
    };
    fetchAttempts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold text-center">🏆 Scoreboard</h2>
      <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-lg">
        {attempts.length === 0 ? (
          <p className="text-center">No quiz attempts yet.</p>
        ) : (
          [...attempts].reverse().map((attempt, index) => (
            <div key={index} className="border-b py-2">
              <p>📅 Date: {new Date(attempt.date).toLocaleString()}</p>
              <p>🎯 Score: <strong>{attempt.score}/10</strong></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Scoreboard;
