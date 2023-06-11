import express, { Application } from "express";

const PORT = 8000;

const app: Application = express();

app.get("/foo", (_req, res) => {
  res.send({
    message: "bar",
  });
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
