const express = require("express");
const gameRouter = express.Router();
const Game = require("../models/gameModel");

//post
gameRouter.post("/add", async (req, res) => {
  try {
    const newGame = new Game(req.body);
    const result = await newGame.save();
    res.send({ game: result, msg: "game added succesfully" });
  } catch (error) {
    console.log(error);
  }
});
//get all games
gameRouter.get("/", async (req, res) => {
  try {
    const result = await Game.find();
    res.send({ games: result, msg: "all games" });
  } catch (error) {
    console.log(error);
  }
});
//get game by id
gameRouter.get("/:id", async (req, res) => {
  try {
    const result = await Game.findById(req.params.id);
    res.send({ game: result, msg: "searched game" });
  } catch (error) {
    console.log(error);
  }
});
//update game
gameRouter.put("/:id", async (req, res) => {
  try {
    const result = await Game.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "game updated" });
  } catch (error) {
    console.log(error);
  }
});

//delete
gameRouter.delete("/:id", async (req, res) => {
  try {
    const result = await Game.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "game deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = gameRouter;
