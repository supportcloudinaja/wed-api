const serverless = require('serverless-http'); // add for serverless
const express = require("express");
const connectDB = require("./DB/Connection");
const app = express();
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json());
const cors = require("cors");

connectDB();
app.use(cors());
app.use(
  express.json({
    extended: false,
  })
);
app.use("/api/wedding", require("./API/User"));
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, "0.0.0.0", () => console.log("Server Started"));