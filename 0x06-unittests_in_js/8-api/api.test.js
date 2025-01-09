const request = require("request");
const { expect } = require("chai");
const app = require("./api"); // Update path to your app file if needed

describe("Index Page", () => {
  it("should return the correct status code (200)", (done) => {
    request.get("http://localhost:7865/", (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("should return the correct result ('Welcome to the payment system')", (done) => {
    request.get("http://localhost:7865/", (err, res, body) => {
      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });

  it("should have the correct content type (text/html)", (done) => {
    request.get("http://localhost:7865/", (err, res, body) => {
      expect(res.headers["content-type"]).to.match(/text\/html/);
      done();
    });
  });
});
