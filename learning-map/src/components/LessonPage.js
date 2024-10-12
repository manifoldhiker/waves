import React from 'react';

const LessonPage = ({ page }) => {
  return (
    <div className="lesson-page">
      <h3>{page.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

export default LessonPage;
