const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/User");
const route = express.Router();

route.post("/post-data", async (req, res) => {
  const {
    name,
    phone,
    wish,
    attend
  } = req.body;
  let user = {};
  user.name = name;
  user.phone = phone;
  user.wish = wish;
  user.attend = attend;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.get("/get-data", async (req, res) => {
  const getdata = await User.find();
  res.send(getdata);
});
module.exports = route;