const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping)
{
    return `The total is: ${Utils.calculateNumber('SUM',totalAmount, totalShipping)}`;
}
module.exports = sendPaymentRequestToApi;