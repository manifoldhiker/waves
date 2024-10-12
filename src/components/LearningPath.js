import React from 'react';
import NodeCard from './NodeCard';
import PathConnector from './PathConnector';
import ProgressBar from './ProgressBar';
import NavigationBar from './NavigationBar';

const learningPath = [
  { title: "Nature is a Puzzle", status: "completed" },
  { title: "Science Rules", status: "completed" },
  { title: "Practice Science Rules", status: "active", type: "practice" },
  { title: "Structures", status: "upcoming" },
];

function LearningPath() {
  const progress = (learningPath.filter(node => node.status === 'completed').length / learningPath.length) * 100;

  return (
    <div className="learning-path">
      <header>
        <button className="back-button">←</button>
        <h1>1.1 Scientific Thinking</h1>
        <div className="battery-indicator">🔋</div>
      </header>
      <ProgressBar progress={progress} />
      <div className="nodes-container">
        {learningPath.map((node, index) => (
          <React.Fragment key={index}>
            <NodeCard {...node} />
            {index < learningPath.length - 1 && <PathConnector status={node.status} />}
          </React.Fragment>
        ))}
      </div>
      <NavigationBar />
    </div>
  );
}

export default LearningPath;
