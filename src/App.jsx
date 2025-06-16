import React, { useState } from 'react';
import CardSetInfo from './components/cardinfo';
import Flashcard from './components/flashcards';
import PreviousButton from './components/prev-button';
import NextButton from './components/next-button';
import flashcards from './data/cards';
import './App.css';
import pinkBackground from './assets/pink3.jpg';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const totalCards = flashcards.length;

  const handleNextClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePreviousClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${pinkBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100vw',
      }}
      >
      <CardSetInfo totalCards={totalCards} />
      <Flashcard 
        question={currentCard.question}
        answer={currentCard.answer}
        gif={currentCard.gif}
      />
      <div className="navigation-controls">
        <PreviousButton onClick={handlePreviousClick} />
        <p className="progress-indicator">{currentCardIndex + 1} / {totalCards}</p>
        <NextButton onClick={handleNextClick} />
      </div>
    </div>
  );
}

export default App; 