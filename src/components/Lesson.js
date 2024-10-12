import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LessonPage from './LessonPage';

const Lesson = ({ lesson, onFinish }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const goToNextPage = () => {
    if (currentPage < lesson.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onFinish();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const progress = ((currentPage + 1) / lesson.pages.length) * 100;

  return (
    <div className="lesson">
      <h2>{lesson.title}</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <LessonPage page={lesson.pages[currentPage]} />
      <div className="lesson-navigation">
        {currentPage > 0 && (
          <button onClick={goToPreviousPage}>Previous</button>
        )}
        {currentPage < lesson.pages.length - 1 ? (
          <button onClick={goToNextPage}>Next</button>
        ) : (
          <button onClick={onFinish}>Take the Quiz</button>
        )}
      </div>
      <button className="home-button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default Lesson;
