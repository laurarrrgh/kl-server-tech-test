const express = require("express");

const { app } = require("./app.js");

app.listen(9090, () => {
  console.log("listening...");
});
