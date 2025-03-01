// /src/pages/TipsQuiz.js
import React, { useState, useEffect, useContext } from 'react';
import { UserSettingsContext } from '../UserSettingsContext';

const quizData = [
  {
    question: "What should you do if you're unsure about a food's safety?",
    choices: ["Eat it anyway", "Ask an adult", "Ignore your allergies"],
    correctAnswer: "Ask an adult",
    explanation: "When you're not sure, asking an adult helps you decide safely.",
    tip: "Always carry an allergy information card."
  },
  {
    question: "Which ingredient is one of the most common allergens?",
    choices: ["Sugar", "Peanuts", "Salt"],
    correctAnswer: "Peanuts",
    explanation: "Peanuts are a common allergen that can cause severe reactions.",
    tip: "Always check labels for hidden peanut products."
  },
  {
    question: "How often should you check food labels?",
    choices: ["Every time you try something new", "Once a week", "Never"],
    correctAnswer: "Every time you try something new",
    explanation: "Ingredients can change, so you must check every time.",
    tip: "Make it a habit to read labels before eating."
  },
  {
    question: "If a friend offers you food you're allergic to, what should you do?",
    choices: ["Eat it to be polite", "Decline and inform them", "Ignore your allergy"],
    correctAnswer: "Decline and inform them",
    explanation: "Informing your friend helps them understand your needs and keep you safe.",
    tip: "Educate friends and family about your allergies."
  },
  {
    question: "What is a good habit if you have a food allergy?",
    choices: ["Always carry your epinephrine", "Rely on others", "Avoid asking questions"],
    correctAnswer: "Always carry your epinephrine",
    explanation: "Carrying your emergency medication can save your life in a reaction.",
    tip: "Keep your EpiPen with you at all times."
  },
  {
    question: "What is the first step if you accidentally ingest an allergen?",
    choices: ["Wait and see", "Take your medication and seek help", "Ignore it"],
    correctAnswer: "Take your medication and seek help",
    explanation: "Acting quickly by taking your medication and getting help is crucial.",
    tip: "Follow your emergency action plan immediately."
  },
  {
    question: "When dining out, what should you do about your allergy?",
    choices: ["Order anything", "Inform the waiter", "Don't mention it"],
    correctAnswer: "Inform the waiter",
    explanation: "Letting the staff know can help them prepare a safe meal for you.",
    tip: "Call ahead if you have concerns about a restaurant's ability to accommodate your allergy."
  },
  {
    question: "What is one of the best ways to educate yourself about your food allergy?",
    choices: ["Ignore expert advice", "Attend a support group", "Only read online forums"],
    correctAnswer: "Attend a support group",
    explanation: "Support groups provide reliable advice and shared experiences.",
    tip: "Join local or online allergy support groups."
  },
  {
    question: "Before trying a new food, what should you do if you have an allergy?",
    choices: ["Ask an adult", "Trust the chef", "Skip checking"],
    correctAnswer: "Ask an adult",
    explanation: "Checking with an adult can prevent accidental exposure.",
    tip: "Develop a habit of always asking about ingredients."
  },
  {
    question: "Why is it important to have a written emergency plan?",
    choices: ["It isn't necessary", "It helps everyone know what to do", "Only for severe cases"],
    correctAnswer: "It helps everyone know what to do",
    explanation: "A written plan ensures quick and correct actions in an emergency.",
    tip: "Keep copies of your emergency plan with caregivers."
  },
  {
    question: "How can you reduce cross-contamination in your kitchen?",
    choices: ["Use the same utensils", "Wash and separate utensils", "Don't worry about it"],
    correctAnswer: "Wash and separate utensils",
    explanation: "Separate and clean utensils help prevent allergen cross-contamination.",
    tip: "Always wash your hands and clean surfaces before cooking."
  },
  {
    question: "When should you update your food allergy management plan?",
    choices: ["Annually", "When something changes", "Never"],
    correctAnswer: "When something changes",
    explanation: "Your plan should update as your allergy or environment changes.",
    tip: "Review your management plan after any new reaction."
  }
];

const extraManagementTips = [
  "Always wash your hands before and after eating.",
  "Keep a list of safe foods accessible.",
  "Inform your school and caregivers about your allergies.",
  "Carry emergency contact information with you.",
  "Review food recalls and safety alerts regularly.",
  "Clean and sanitize surfaces to avoid cross-contamination.",
  "Keep a food diary to track any reactions.",
  "Educate friends and family about your allergies.",
  "Use separate utensils to avoid cross-contamination.",
  "Always check labels, even on familiar foods.",
  "Plan ahead when traveling or dining out.",
  "Consult with your allergist regularly.",
  "Store your emergency medications safely and accessibly.",
  "Join support groups to share and learn management tips.",
  "Review your allergy plan after any significant change."
];

function TipsQuiz() {
  const { ageGroup } = useContext(UserSettingsContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  // Activate timer for older children
  useEffect(() => {
    if (ageGroup === '8-12' || ageGroup === 'teens') {
      setTimerActive(true);
      setTimeLeft(30);
      const interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setFeedback("Time's up! No answer was selected.");
            setTimeout(() => {
              goToNextQuestion();
            }, 2000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimerActive(false);
    }
  }, [currentQuestion, ageGroup]);

  const handleChoiceSelection = (choice) => {
    if (selectedChoice !== '') return; // Prevent multiple selections
    setSelectedChoice(choice);
    if (choice === quizData[currentQuestion].correctAnswer) {
      setFeedback("Correct! " + quizData[currentQuestion].explanation);
      setScore(prevScore => prevScore + 10);
    } else {
      setFeedback("Incorrect. " + quizData[currentQuestion].explanation);
    }
  };

  const goToNextQuestion = () => {
    setSelectedChoice('');
    setFeedback('');
    setTimeLeft(30);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };

  return (
    <div className="tips-quiz-container">
      <h2 className="quiz-title">Tips & Quiz</h2>
      {(ageGroup === '8-12' || ageGroup === 'teens') && (
        <p className="timer">Time Remaining: {timeLeft} sec</p>
      )}
      {!quizComplete && (
        <div className="question-container">
          <p className="question-text">{quizData[currentQuestion].question}</p>
          <div className="choices-container">
            {quizData[currentQuestion].choices.map((choice, index) => (
              <button
                key={index}
                className={`choice-button ${selectedChoice === choice ? 'selected' : ''}`}
                onClick={() => handleChoiceSelection(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
          {feedback && <p className="feedback">{feedback}</p>}
          {quizData[currentQuestion].tip && (
            <p className="management-tip">Tip: {quizData[currentQuestion].tip}</p>
          )}
          {selectedChoice !== '' && (
            <button className="next-button" onClick={goToNextQuestion}>
              Next Question
            </button>
          )}
        </div>
      )}
      {quizComplete && (
        <div className="quiz-summary">
          <h2 className="quiz-title">Quiz Complete!</h2>
          <p className="quiz-score">Your final score is: {score} / {quizData.length * 10}</p>
          <h3>Additional Tips for Managing Your Food Allergy</h3>
          <ul className="extra-tips">
            {extraManagementTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
          <button
            className="start-game-button"
            onClick={() => {
              // Reset quiz state for retake
              setCurrentQuestion(0);
              setSelectedChoice('');
              setFeedback('');
              setScore(0);
              setQuizComplete(false);
            }}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default TipsQuiz;
