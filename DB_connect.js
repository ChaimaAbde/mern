const mongoose = require("mongoose");
const DbConnect = async () => {
  try {
    let result = await mongoose.connect(
      "mongodb+srv://aziz:aziz123456@cluster0.bmfwqfx.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Data base is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DbConnect;
