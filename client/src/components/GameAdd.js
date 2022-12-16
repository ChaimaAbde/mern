import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addGame } from "../js/gameSlice/gameSlice";

function GameAdd({ ping, setping }) {
  const dispatch = useDispatch();
  const [game, setgame] = useState({
    name: "",
    image: "",
    category: "",
    release_date: "",
  });
  return (
    <div className="add">
      <p>Name:</p>
      <input
        type="text"
        onChange={(e) => setgame({ ...game, name: e.target.value })}
      />
      <p>Category:</p>
      <select onChange={(e) => setgame({ ...game, category: e.target.value })}>
        <option value="moba">moba</option>
        <option value="fps">fps</option>
        <option value="tps">tps</option>
        <option value="rpg">rpg</option>
      </select>

      <p>Date:</p>
      <input
        type="date"
        onChange={(e) => setgame({ ...game, release_date: e.target.value })}
      />
      <p>Image:</p>
      <input
        type="text"
        onChange={(e) => setgame({ ...game, image: e.target.value })}
      />
      <button
        onClick={() => {
          dispatch(addGame(game));
          setping(!ping);
        }}
      >
        Add new game
      </button>
    </div>
  );
}

export default GameAdd;
