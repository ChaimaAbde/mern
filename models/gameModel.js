const mongoose = require("mongoose");
const schema = mongoose.Schema;
const gameSchema = new schema({
  name: String,
  image: String,
  rate: { type: Number, default: 0 },
  category: String,
  release_date: String,
});

const Game = mongoose.model("game", gameSchema);
module.exports = Game;
