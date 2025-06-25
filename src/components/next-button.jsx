import React from 'react';

const NextButton = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} className="nav-button" disabled={disabled}>
      Next
    </button>
  );
};

export default NextButton; 