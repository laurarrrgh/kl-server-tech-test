const express = require("express");
const restaurantRouter = express.Router();

restaurantRouter.use(express.json());

const {
  getAllRestaurants,
  getRestaurantByID
} = require("../Controllers/restaurants.js");

restaurantRouter.get("/", getAllRestaurants);

restaurantRouter.get(`/:restaurantID`, getRestaurantByID);

module.exports = restaurantRouter;
