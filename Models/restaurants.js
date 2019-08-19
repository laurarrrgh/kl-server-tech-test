const fs = require("fs");
const { readFile } = require("fs");

const fetchAllRestaurants = cb => {
  fs.readFile("./restaurants.json", (err, restaurants) => {
    const parsedRestaurants = JSON.parse(restaurants);
    cb(null, parsedRestaurants);
  });
};

const fetchRestaurantByID = (restaurantID, cb) => {
  fs.readFile("./restaurants.json", (err, restaurants) => {
    const parsedRestaurants = JSON.parse(restaurants);
    const singleRestaurant = parsedRestaurants.filter(restaurant => {
      return restaurant.id === Number(restaurantID);
    });
    cb(null, singleRestaurant);
  });
};

module.exports = { fetchAllRestaurants, fetchRestaurantByID };
