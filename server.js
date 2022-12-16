const express = require("express");
const app = express();
const DbConnect = require("./DB_connect");
const cors=require('cors')
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/game", require("./routes/gameRouter"));
DbConnect();
app.listen(5000, (err) => {
  err ? console.log(err) : console.log("server is running");
});
