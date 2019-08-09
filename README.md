# Restaurant API Tech Test

This task comes with a JSON file containing restaurant data. The challenge is to build an Express REST API which provides restaurant information to the user. In one hour, please complete as many of the tasks as possible. We do not expect you to finish this test, just do as much as possible in the time frame.

## The Test

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
