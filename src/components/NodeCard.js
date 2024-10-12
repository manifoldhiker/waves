import React from 'react';
import CheckmarkIcon from './icons/CheckmarkIcon';
import PracticeIcon from './icons/PracticeIcon';

function NodeCard({ title, status, type }) {
  return (
    <div className={`node-card ${status} ${type}`}>
      <div className="card-content">
        <h4>{title}</h4>
        {status === "completed" && <CheckmarkIcon />}
        {type === "practice" && <PracticeIcon />}
      </div>
    </div>
  );
}

export default NodeCard;
