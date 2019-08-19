const { fetchAllRestaurants } = require("../Models/restaurants.js");

exports.getAllRestaurants = (req, res, next) => {
  fetchAllRestaurants((err, restaurants) => {
    if (err) next(err);
    else res.status(200).send(restaurants);
  });
};
