import React from 'react';

const NextButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="nav-button">
      Next
    </button>
  );
};

export default NextButton; 