import React from 'react';

function PathConnector({ status }) {
  return (
    <svg className={`path-connector ${status}`} width="100" height="50">
      <path d="M0,25 Q50,0 100,25" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default PathConnector;
