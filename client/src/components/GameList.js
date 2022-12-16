import React from "react";
import { useSelector } from "react-redux";
import GameCard from "./GameCard";

function GameList() {
  const games = useSelector((state) => state.game?.games);
  return (
    <div className="list">
      {games ? (
        games.map((el, i) => <GameCard key={i} game={el} />)
      ) : (
        <img src="https://media.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif" />
      )}
    </div>
  );
}

export default GameList;
