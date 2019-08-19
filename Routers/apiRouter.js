const express = require("express");
const apiRouter = express.Router();
const restaurantRouter = require("./restaurantRouter");

apiRouter.use(express.json());

apiRouter.use("/restaurants", restaurantRouter);

module.exports = apiRouter;
