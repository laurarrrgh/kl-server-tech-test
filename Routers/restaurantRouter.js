const express = require("express");
const restaurantRouter = express.Router();

restaurantRouter.use(express.json());

const { getAllRestaurants } = require("../Controllers/restaurants.js");

restaurantRouter.get("/", getAllRestaurants);

module.exports = restaurantRouter;
