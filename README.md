# Korelogic Restaurant API Tech Test

## Overview

A node and express API that serves information about restaurants from a supplied JSON file. Tested using Mocha, Chai and Supertest.

## Original Brief

This task comes with a JSON file containing restaurant data. The challenge is to build an Express REST API which provides restaurant information to the user. In one hour, please complete as many of the tasks as possible. We do not expect you to finish this test, just do as much as possible in the time frame.

Using the data provided in `restaurants.json`:

1. Create an Express server, which runs on localhost (any port)
2. Create the `/restaurants` endpoint, which returns all of the restaurants as an array
3. Create the `/restaurants/:id` endpoint, which returns a single restaurant object where `:id` matches the `id` of a restaurant, or a `404` error if none can be found
4. Add optional query parameters on the `/restaurants` endpoint called `vegan-options` and `dog-friendly` which each accept the values of `true` / `false` to filter the returned restaurants. Eg a GET request to `/resturants?vegan-options=true&dog-friendly=false` should return only restaurants where the `vegan-options` field equals `true` AND the `dog-friendly` field equals `false`
5. Add an optional query parameter on the `/restaurants` endpoint called `cuisines` which accepts a comma-separated list of cuisines (eg `/restaurants?cuisines=british,cafe`). Only restaurants which have all the cuisines should be returned. If no matches are found, an empty Array should be returned.

## Review Criteria

- A clear README with instructions on how to run your server
- Well structured code
- A good understanding of Node and Express
- Descriptive and regular commit messages
- Good use of Javascript data manipulation methods

## Installation

To review this project locally:

1. Clone:

   `https://github.com/laurarrrgh/kl-server-tech-test.git`

2. Install the dependencies - these include Mocha, Chai, Supertest, Nodemon and Express:

   `npm install`

3. To run the server locally on localhost:9090:

   `npm run dev`

4. Testing can be run using:

   `npm run test`

## Available End-Points

All Restaurants - `localhost:9090/api/restaurants/`

Specific Restaurant by ID (numeric) - `localhost:9090/api/restaurants/:restaurantID`

## Author

Laura Fogarty
