const { expect } = require("chai");
const { app } = require("../app");
const request = require("supertest")(app);

describe("/api", () => {
  describe("/restaurants", () => {
    it("status 200: responds with an array of restaurants", () => {
      return request
        .get("/api/restaurants")
        .expect(200)
        .then(({ body }) => {
          expect(body).to.be.an("array");
          expect(body.length).to.equal(6);
        });
    });
  });
  describe("/restaurants/:restaurantID", () => {
    it("status 200: responds with a single restaurant object for a valid ID", () => {
      return request
        .get("/api/restaurants/1")
        .expect(200)
        .then(({ body }) => {
          expect(body).to.be.an("object");
          expect(body).to.contain.keys(
            "id",
            "name",
            "address",
            "cuisine",
            "rating"
          );
        });
    });
  });
});
