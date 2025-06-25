import React from 'react';

const PreviousButton = ({ onClick, disabled}) => {
  return (
    <button onClick={onClick} className="nav-button" disabled={disabled}>
      Previous
    </button>
  );
};

export default PreviousButton; 