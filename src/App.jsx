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
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const totalCards = flashcards.length;

  const handleNextClick = () => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      setGuess("");
      setFeedback("");
      setIsFlipped(false);
    }
  };

  const handlePreviousClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
      setGuess("");
      setFeedback("");
      setIsFlipped(false);
    }
  };

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (
      guess.trim().toLowerCase() ===
      flashcards[currentCardIndex].answer.trim().toLowerCase()
    ) {
      setFeedback("correct");
      setIsFlipped(true);
    } else {
      setFeedback("incorrect");
      setIsFlipped(false);
    }
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${pinkBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <CardSetInfo totalCards={totalCards} />
      <div className="main-wrapper">
        <div
          className="main-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Flashcard
            question={currentCard.question}
            answer={currentCard.answer}
            gif={currentCard.gif}
            isFlipped={isFlipped}
          />

          {/* Guess Form with Inline Feedback */}
          <form
            className="guess-form"
            onSubmit={handleGuessSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '30px',
              flexWrap: 'nowrap',
              flexDirection: 'row'
            }}
          >
            <label htmlFor="guess-input" className="guess-label">Your guess:</label>
            <input
              id="guess-input"
              type="text"
              value={guess}
              onChange={handleGuessChange}
              placeholder="Type your answer..."
              className="guess-input"
              disabled={isFlipped}
              style={{ minWidth: '200px' }}
            />
            <button type="submit" className="submit-button" disabled={isFlipped}>
              Submit
            </button>
            {feedback === 'correct' && (
              <span className="feedback correct">✅ Correct!</span>
            )}
            {feedback === 'incorrect' && (
              <span className="feedback incorrect">❌ Try again!</span>
            )}
          </form>

          {/* Navigation Buttons */}
          <div className="navigation-controls" style={{ marginTop: '20px' }}>
            <PreviousButton
              onClick={handlePreviousClick}
              disabled={currentCardIndex === 0}
            />
            <p className="progress-indicator">
              {currentCardIndex + 1} / {totalCards}
            </p>
            <NextButton
              onClick={handleNextClick}
              disabled={currentCardIndex === totalCards - 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
