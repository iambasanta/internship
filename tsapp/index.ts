import express, { Request, Response, Application } from "express";

const app: Application = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send("typescript seems cool");
});

app.listen(PORT, (): void => {
  console.log(`Listening to ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
