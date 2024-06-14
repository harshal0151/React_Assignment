import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const fetchQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        if (data.response_code === 0) {
          setQuestions(data.results);
          setAnswers(shuffleAnswers(data.results[0]));
        }
      })
      .catch((err) => console.log(err));
  };

  const shuffleAnswers = (question) => {
    const allAnswers = [
      ...question.incorrect_answers,
      question.correct_answer,
    ];
    return allAnswers.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswer = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
    const correct = questions[index].correct_answer === selectedAnswer;
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      if (index < 9) {
        setIndex((prevIndex) => prevIndex + 1);
        setAnswers(shuffleAnswers(questions[index + 1]));
        setSelectedAnswer(null);
      }
    }, 1000); // delay for 1 second to show the selected color
  };

  return (
    <div className="container">
      {index < 10 ? (
        <div>
          <h1>Let's have a quiz, Question : {index + 1}</h1>
          {questions.length > 0 ? (
            <div>
              <p className="question">{questions[index].question}</p>
              {answers.map((answer, ind) => (
                <button
                  key={ind}
                  onClick={() => handleAnswer(answer)}
                  className={selectedAnswer === answer ? "selected" : ""}
                  disabled={selectedAnswer !== null}
                >
                  {answer}
                </button>
              ))}
            </div>
          ) : null}
          <br />
          <button
            onClick={() => {
              setIndex((prevIndex) => prevIndex + 1);
              setAnswers(shuffleAnswers(questions[index + 1]));
              setSelectedAnswer(null);
            }}
          >
            Skip Question
          </button>
        </div>
      ) : (
        <div>
          <h1>Quiz is Over</h1>
          <p>Score is: {score}/10</p>
        </div>
      )}
    </div>
  );
}

export default App;
