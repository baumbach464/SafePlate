import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "What should you do if you're unsure about a food's safety?",
    options: ["Eat it anyway", "Ask an adult", "Ignore your allergies"],
    answer: "Ask an adult"
  },
  {
    question: "Which ingredient is a common allergen?",
    options: ["Sugar", "Peanuts", "Salt"],
    answer: "Peanuts"
  },
  {
    question: "When should you read food labels?",
    options: ["Every time", "Only once", "Never"],
    answer: "Every time"
  }
];

function TipsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    setUserAnswer(option);
    if (option === quizQuestions[currentQuestion].answer) {
      setFeedback("Correct! 👍");
      setScore(score + 1);
    } else {
      setFeedback("Oops, that's not right. 😕");
    }
  };

  const nextQuestion = () => {
    setFeedback('');
    setUserAnswer('');
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="tips-quiz" style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#4a4a4a' }}>Tips & Quiz</h2>
      {currentQuestion < quizQuestions.length ? (
        <>
          <p style={{ fontSize: '1.2em' }}>{quizQuestions[currentQuestion].question}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '20px 0' }}>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} style={{
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: '#4fc1e9',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1em'
              }}>
                {option}
              </button>
            ))}
          </div>
          {feedback && <p style={{ fontSize: '1.2em', fontWeight: '600' }}>{feedback}</p>}
          {userAnswer && currentQuestion < quizQuestions.length - 1 && (
            <button onClick={nextQuestion} style={{
              marginTop: '20px',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              backgroundColor: '#a0d468',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '1em'
            }}>
              Next Question
            </button>
          )}
          {userAnswer && currentQuestion === quizQuestions.length - 1 && (
            <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
              Your final score is {score} / {quizQuestions.length}
            </p>
          )}
        </>
      ) : (
        <p>Quiz Complete!</p>
      )}
    </div>
  );
}

export default TipsQuiz;
