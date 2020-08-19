const mongoose = require("mongoose");

const URI =
  "mongodb+srv://dbWedding:passwedding@cluster0.kebrn.mongodb.net/wedding?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
