const fs = require("fs");
const { readFile } = require("fs");

const fetchAllRestaurants = cb => {
  //console.log('fetching restaurants)
  fs.readFile("./restaurants.json", (err, restaurants) => {
    const parsedRestaurants = JSON.parse(restaurants);
    cb(null, parsedRestaurants);
  });
};

module.exports = { fetchAllRestaurants };
