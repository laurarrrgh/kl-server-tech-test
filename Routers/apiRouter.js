const express = require("express");
const apiRouter = express.Router();

apiRouter.use(express.json());

apiRouter.use("/restaurants", restaurantRouter);

module.exports = apiRouter;
