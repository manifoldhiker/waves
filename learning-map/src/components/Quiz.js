import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ quiz, onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswerImage, setShowAnswerImage] = useState(false);
  const navigate = useNavigate();

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowAnswerImage(true);
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowAnswerImage(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setShowAnswerImage(false);
  };

  if (showResults) {
    return (
      <div className="quiz-results">
        <h2>Quiz Results</h2>
        <p>You scored {score} out of {quiz.questions.length}</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="quiz">
      <h2>{quiz.title}</h2>
      <div className="question">
        <img src={question.image} alt={`Question ${currentQuestion + 1}`} />
        <p>{question.question}</p>
        <div className="options">
          {question.options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
              className={selectedAnswer === option ? (option === question.correctAnswer ? 'correct' : 'incorrect') : ''}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswerImage && question.answerImage && (
          <div className="answer-image">
            <img src={question.answerImage} alt="Answer explanation" />
          </div>
        )}
        {selectedAnswer !== null && (
          <button onClick={goToNextQuestion}>
            {currentQuestion === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        )}
      </div>
      <p>Question {currentQuestion + 1} of {quiz.questions.length}</p>
    </div>
  );
};

export default Quiz;
