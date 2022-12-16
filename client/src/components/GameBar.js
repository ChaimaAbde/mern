import React from "react";
import { Link } from "react-router-dom";

function GameBar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/games">
          <li>Games</li>
        </Link>
        <Link to="/add">
          <li>Add new game</li>
        </Link>
      </ul>
    </div>
  );
}

export default GameBar;
