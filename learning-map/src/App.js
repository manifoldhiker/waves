import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import data from './data.json';
import './styles/App.css';

const AppContent = () => {
  const [currentLesson, setCurrentLesson] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const navigate = useNavigate();

  const { lessons, quizzes } = data;

  const startLesson = (lessonId) => {
    const lesson = lessons.find(l => l.id === lessonId);
    setCurrentLesson(lesson);
    navigate(`/lesson/${lessonId}`);
  };

  const startQuiz = (quizId) => {
    const quiz = quizzes.find(q => q.id === quizId);
    setCurrentQuiz(quiz);
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="App">
      <h1>🏄‍♂️ Surf Learning App 🌊</h1>
      <Routes>
        <Route path="/" element={
          <div className="home">
            <h2>Choose a Lesson</h2>
            {lessons.map(lesson => (
              <button key={lesson.id} onClick={() => startLesson(lesson.id)}>
                {lesson.title}
              </button>
            ))}
          </div>
        } />
        <Route path="/lesson/:lessonId" element={
          <Lesson lesson={currentLesson} onFinish={() => startQuiz(currentLesson.id + '-quiz')} />
        } />
        <Route path="/quiz/:quizId" element={
          <Quiz quiz={currentQuiz} onFinish={() => navigate('/')} />
        } />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContent />
    </Router>
  );
};

export default App;
