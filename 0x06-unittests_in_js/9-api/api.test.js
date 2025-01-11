const request = require("request");
const { expect } = require("chai");
const API_URL = "http://localhost:7865";

describe("API integration test", () => {
  it("GET / returns correct response", (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });
});
describe("GET /cart/:id", () => {
  it("returns 200 and correct response when :id is a number", (done) => {
    request.get(`${API_URL}/cart/123`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Payment methods for cart 123");
      done();
    });
  });
  it("returns 404 when :id is not a number", (done) => {
    request.get(`${API_URL}/cart/abc`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it("returns 404 when :id is missing", (done) => {
    request.get(`${API_URL}/cart/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
