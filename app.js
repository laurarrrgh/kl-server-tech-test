const express = require("express");
const app = express();
const apiRouter = require("./Routers/apiRouter.js");

app.use(express.json());

app.use("/api", apiRouter);

module.exports = { app };
