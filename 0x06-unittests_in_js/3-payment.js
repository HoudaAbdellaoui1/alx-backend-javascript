const { calculateNumber } = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping)
{
    return `The total is: ${calculateNumber('SUM',totalAmount, totalShipping)}`;
}
module.exports = sendPaymentRequestToApi;