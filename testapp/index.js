"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs")

const PORT = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/register", (req, res) => {
    console.log("START");
    console.log("INPUT VALUES", req.body.inputValues);
    console.log("HEADERS", req.headers);
    console.log("END");
    res.sendStatus(200);
});

app.post("/excitement-poll", (req,res) => {

    const jsonData = { excited: req.body.inputValues.excited };

    fs.readFile("excitement-poll.json", (err, data) => {
    let existingData = [];

    if (!err) {
      existingData = JSON.parse(data);
    }

    existingData.push(jsonData);

    const jsonContent = JSON.stringify(existingData, null, 2);

    fs.writeFile("excitement-poll.json", jsonContent, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error saving data." });
      }
      res.status(200).json({ message: "Data saved successfully!" });
    });
  });

})

app.get("/excitement-poll", (req, res) => {
  fs.readFile("excitement-poll.json", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading data." });
    }

    const jsonData = JSON.parse(data);

    let yesCount = 0;
    let noCount = 0;

    jsonData.forEach((entry) => {
      if (entry.excited === "yes") {
        yesCount++;
      } else if (entry.excited === "no") {
        noCount++;
      }
    });

    const result = { yes: yesCount, no: noCount };
    res.status(200).json(result);
  });
});

app.post("/event/survey", (req,res) => {
    console.log("START");
    console.log("INPUT VALUES", req.body.inputValues);
    console.log("END");
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
