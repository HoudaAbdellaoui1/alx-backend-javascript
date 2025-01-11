const express = require("express");
const app = express();
const port = 7865;

app.get("/", (_, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id", (req, res) => {
    if(!isNaN(Number(req.params.id)))
    {
        res.send(`Payment methods for cart ${req.params.id}`);
    }
    else {
        res.status(404).send("Not Found")
    }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;