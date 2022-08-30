import React, { useState } from "react";
import './App.css'

export function App() {

const [showFinalResults, setFinalResults] = useState(false);
const [score, setScore] = useState(0);
const [currentQuestion, setCurrentQuestion] = useState(0);

const questions = [
  {
    text: "Escolha a tag HTML correta para o maior título",
    options: [
      { id: 0, text: "Heading", isCorrect: false },
      { id: 1, text: "h6", isCorrect: false },
      { id: 2, text: "head", isCorrect: false },
      { id: 3, text: "h1", isCorrect: true },
    ],
  },
  {
    text: "O que significa HTML?",
    options: [
      { id: 0, text: "Hyperlinks and Text Markup Language", isCorrect: true },
      { id: 1, text: "Hyper Text Markup Language", isCorrect: false },
      { id: 2, text: "Home Tool Markup Language", isCorrect: false },
      { id: 3, text: "Hype Text Mockup Language", isCorrect: false },
    ],
  },
  {
    text: "Qual é a tag HTML correta para inserir uma quebra de linha?",
    options: [
      { id: 0, text: "<br>", isCorrect: true },
      { id: 1, text: "<lb>", isCorrect: false },
      { id: 2, text: "<break>", isCorrect: false },
      { id: 3, text: "<tr>", isCorrect: false },
    ],
  },
  {
    text: "O que significa CSS?",
    options: [
      { id: 0, text: "Creative Style Sheets", isCorrect: false },
      { id: 1, text: "Cascading Style Sheets", isCorrect: true },
      { id: 2, text: "Computer Style Sheets", isCorrect: false },
      { id: 3, text: "Colorful Style Sheets", isCorrect: false },
    ],
  },
  {
    text: "Qual é a sintaxe CSS correta?",
    options: [
      { id: 0, text: "{body:color=black;}", isCorrect: false },
      { id: 1, text: "body {color: black;}", isCorrect: true },
      { id: 2, text: "body:color=black;", isCorrect: false },
      { id: 3, text: "{body;color:black;}", isCorrect: false },
    ],
  },
];

const optionClicked = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }
  if (currentQuestion +1 < questions.length) {
   setCurrentQuestion(currentQuestion + 1); 
  } else {
    setFinalResults(true);
  }
};

const restartGame = () => {
  setScore(0);
  setCurrentQuestion(0);
  setFinalResults(false);
}

return (
    <div className="App">
      {/*1. Header*/}
          <h1>Desenvolvimento Web</h1>
      {/*2. Current Score*/}
          <h2>Pontos: {score}</h2>

          {showFinalResults ? (
            /*4. Final Result*/
          <div className="final-results">
          <h1>Total de Pontos</h1>
          <h2>{score} de {questions.length}  - ({(score/questions.length) * 100}%)</h2>

            <button onClick={() => restartGame()}>Restart Game</button>
        </div>
          ) : (
      /*5. Question Card*/
        <div className="question-card">
          <h2>Questão: {currentQuestion + 1} de {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                  <li 
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)} 
                  >{option.text}
                  </li>
              );
              })}
          </ul>
        </div>
          )} 
    </div>
  );
}


