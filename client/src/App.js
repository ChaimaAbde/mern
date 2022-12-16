import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GameAdd from "./components/GameAdd";
import GameBar from "./components/GameBar";
import GameList from "./components/GameList";
import Home from "./components/Home";
import { getgames } from "./js/gameSlice/gameSlice";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(getgames());
  }, [ping]);

  return (
    <div className="App">
      <GameBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/games" element={<GameList />}></Route>
        <Route
          path="/add"
          element={<GameAdd ping={ping} setping={setping} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
