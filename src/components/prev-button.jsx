import React from 'react';

const PreviousButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="nav-button">
      Previous
    </button>
  );
};

export default PreviousButton; 