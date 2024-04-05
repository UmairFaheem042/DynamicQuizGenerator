import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Questions from "../db/Questions";

const Quiz = () => {
  const { category, difficulty } = useParams();
  const [cricket, setCricket] = useState([]);
  const [physics, setPhysics] = useState([]);
  const [chemistry, setChemistry] = useState([]);

  useEffect(() => {
    const filteredCricket = Questions["Cricket"].filter(
      (q) => q.difficulty === difficulty
    );
    setCricket(filteredCricket);

    const filteredPhysics = Questions["Physics"].filter(
      (q) => q.difficulty === difficulty
    );
    setPhysics(filteredPhysics);

    const filteredChemistry = Questions["Chemistry"].filter(
      (q) => q.difficulty === difficulty
    );
    setChemistry(filteredChemistry);
  }, [difficulty]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === getCategoryQuestions()[currentQuestion].corr) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  // Function to get questions based on the selected category
  const getCategoryQuestions = () => {
    switch (category) {
      case "Cricket":
        return cricket;
      case "Physics":
        return physics;
      case "Chemistry":
        return chemistry;
      default:
        return [];
    }
  };

  const questions = getCategoryQuestions();

  return (
    <div className="game">
      <div className="quiz">
        <div className="quizHeader">
          {currentQuestion < questions.length && (
            <>
              <h1 className="category">{category}</h1>
              <h5>
                <span className="quizScore">{currentQuestion + 1}</span>/
                {questions.length}
              </h5>
            </>
          )}
        </div>
        {currentQuestion < questions.length ? (
          <>
            <div className="question">{questions[currentQuestion].ques}</div>
            <div className="options">
              {Object.values(questions[currentQuestion])
                .slice(2, 6)
                .map((option, index) => (
                  <div
                    key={index}
                    className={`option ${
                      selectedOption === option ? "selected" : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                ))}
            </div>
            <div className="buttons">
              <button className="btn" onClick={handleNextQuestion}>
                Next Question
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2>Quiz completed!</h2>
            <p>
              Your score: <span className="quizScore">{score}</span> out of{" "}
              {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
