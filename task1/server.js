const express = require("express");
const app = express();

const products = require("./products.json");

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.get("/expensive", (req, res) => {
  function getExpensiveProduct(products) {
    return products.reduce(function (prev, current) {
      if (prev.price > current.price) {
        return prev;
      } else {
        return current;
      }
    });
  }
  const expensive = getExpensiveProduct(products);
  res.status(200).json(expensive);
});

app.get("/sum", (req, res) => {
  const initialPrice = 0;
  const sumOfPrices = products.reduce(
    (sum, current) => sum + current.price,
    initialPrice
  );
  res.status(200).json(sumOfPrices);
});

app.listen(8000);
