import React from 'react';
import '../flashcards.css'; 

const Flashcard = ({ question, answer, gif, isFlipped }) => {

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={() => {}}>
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