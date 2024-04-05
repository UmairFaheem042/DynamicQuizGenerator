import React, { useState } from "react";
import QuizCard from "../components/QuizCard";

const Home = () => {
//   const [playerName, setPlayerName] = useState("");
  const [quizCategory, setQuizCategory] = useState("");

  return (
    <div className="Home">
      <header>
        <h1>DYNAMIC QUIZ GENERATOR</h1>
      </header>
      {/* <input
        type="text"
        placeholder="Enter Player Name"
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
      /> */}
      <div className="game_settings">
        {/* <h3>Quiz Configurations</h3> */}
        <div className="selectQuiz">
          <QuizCard
            category={"Cricket"}
            quizCategory={quizCategory}
            setQuizCategory={setQuizCategory}
          />
          <QuizCard
            category={"Physics"}
            quizCategory={quizCategory}
            setQuizCategory={setQuizCategory}
          />
          <QuizCard
            category={"Chemistry"}
            quizCategory={quizCategory}
            setQuizCategory={setQuizCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
