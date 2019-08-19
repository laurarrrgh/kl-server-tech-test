const {
  fetchAllRestaurants,
  fetchRestaurantByID
} = require("../Models/restaurants.js");

exports.getAllRestaurants = (req, res, next) => {
  fetchAllRestaurants((err, restaurants) => {
    if (err) next(err);
    else res.status(200).send(restaurants);
  });
};

exports.getRestaurantByID = (req, res, next) => {
  const { restaurantID } = req.params;
  fetchRestaurantByID(restaurantID, (err, restaurant) => {
    res.status(200).send(restaurant[0]);
  });
};
