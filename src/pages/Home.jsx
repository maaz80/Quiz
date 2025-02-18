import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-blue-50 to-white">
      {/* Animations using Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl text-center lin md:text-4xl font-bold text-blue-600">
          {/* Animations using react-type-animation  */}
          <TypeAnimation
            sequence={[
              '🎓 Welcome to Quiz Platform',
              1000,
              '🎓 Ready to Learn?',
              1000,
              '🎓 Test Your Knowledge!',
              1000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-600 mt-2"
        >
          Test your knowledge with fun quizzes!
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {/* Buttons  */}
        <Link to="/quiz">
          <motion.button
            className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Quiz
          </motion.button>
        </Link>
        <Link to="/scoreboard">
          <motion.button
            className="ml-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Scoreboard
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;