const express = require("express");
const app = express();
const apiRouter = require("./Routers/apiRouter.js");

app.use(express.json());

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  res.status(404).send({ code: 404, message: "Page Not Found" });
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send({ code: 500, message: "Server Error!" });
});

module.exports = { app };
