import React from "react";

function GameCard({ game }) {
  return (
    <div className="card">
      <img src={game.image} alt={game.name} />
      <div className="card-content">
        <h1>{game.name}</h1>
        <p>{game.release_date}</p>
        <p>{game.rate}</p>
      </div>
    </div>
  );
}

export default GameCard;
