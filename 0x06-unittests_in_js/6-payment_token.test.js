const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a resolved promise with the correct object when success is true", (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(result).to.deep.equal({
          data: "Succssful response from the API",
        });
        done();
      })
      .catch((error) => done(error));
  });
});
