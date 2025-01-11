const request = require("request");
const { expect } = require("chai");

const API_URL = "http://localhost:7865";

describe("API Tests", () => {
  describe("GET /", () => {
    it("returns the correct welcome message", (done) => {
      request.get(`${API_URL}/`, (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal("Welcome to the payment system");
        done();
      });
    });
  });

  describe("GET /cart/:id", () => {
    it("returns 200 and payment methods for a valid numeric cart ID", (done) => {
      request.get(`${API_URL}/cart/123`, (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal("Payment methods for cart 123");
        done();
      });
    });

    it("returns 404 for a non-numeric cart ID", (done) => {
      request.get(`${API_URL}/cart/abc`, (_err, res, body) => {
        expect(res.statusCode).to.equal(404);
        expect(body).to.equal("Not Found");
        done();
      });
    });
  });

  describe("GET /abailable_payments", () => {
    it("returns 200 and the correct payment methods object", (done) => {
      request.get(
        `${API_URL}/available_payments`,
        { json: true },
        (_err, res, body) => {
          expect(res.statusCode).to.equal(200);
          expect(body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          done();
        }
      );
    });
  });

  describe("POST /login", () => {
    it("returns a welcome message with the username", (done) => {
      request.post(
        `${API_URL}/login`,
        {
          json: { userName: "Alice" },
        },
        (_err, res, body) => {
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal("Welcome Alice");
          done();
        }
      );
    });

    it("returns 400 if userName is missing", (done) => {
      request.post(
        `${API_URL}/login`,
        {
          json: {},
        },
        (_err, res, body) => {
          expect(res.statusCode).to.equal(400);
          expect(body).to.equal("Missing userName in request body");
          done();
        }
      );
    });
  });
});
