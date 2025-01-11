const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 7865;

app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id", (req, res) => {
  if (!isNaN(Number(req.params.id))) {
    res.send(`Payment methods for cart ${req.params.id}`);
  } else {
    res.status(404).send("Not Found");
  }
});

app.get("/available_payments", (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post("/login", (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    res.send(`Welcome ${req.body.userName}`);
  } else {
    res.status(400).send("Missing userName in request body");
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
