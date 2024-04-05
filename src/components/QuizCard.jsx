import React, { useState } from "react";
import { Link } from "react-router-dom";

const QuizCard = ({ category }) => {
  const [difficulty, setDifficulty] = useState("Easy");
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };
  console.log(difficulty);

  return (
    <div className="quizCard">
      <h2>{category}</h2>
      <select
        className="levels"
        value={difficulty}
        onChange={handleDifficultyChange}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <Link
        to={`/play/${category}/${difficulty}`}
        className="btn"
        style={{
          textAlign: "center",
        }}
      >
        <button
          style={{
            fontWeight: 600,
          }}
        >
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default QuizCard;
