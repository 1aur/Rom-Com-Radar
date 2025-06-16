import React, { useState } from 'react';
import '../flashcards.css'; 

const Flashcard = ({ question, answer, gif }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{question}</p>
        </div>
        <div className="flashcard-back">
          <p>{answer}</p>
          {gif && <img src={gif} alt="" className="flashcard-gif" />}
        </div>
      </div>
    </div>
  );
};

export default Flashcard; 