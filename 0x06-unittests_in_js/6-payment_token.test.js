const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a resolved promise with the correct object when success is true", async () => {
    const result = await getPaymentTokenFromAPI(true);
    expect(result).to.deep.equal({ data: "Succssful response from the API" });
  });
});
