import React from 'react';

const CardSetInfo = ({ totalCards }) => {
  return (
    <div className="card-set-info">
      <h1>⋆ ˚｡⋆୨ Rom-Com Radar ୧⋆ ˚｡⋆</h1>
      <p>Bring out the popcorn and ice-cream!</p>
      <p>Total Cards: {totalCards}</p>
    </div>
  );
};

export default CardSetInfo; 