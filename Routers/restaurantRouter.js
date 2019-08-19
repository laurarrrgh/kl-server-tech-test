const express = require("express");
const restaurantRouter = express.Router();

restaurantRouter.use(express.json());

module.exports = restaurantRouter;
