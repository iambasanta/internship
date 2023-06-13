import express from "express";
import cors from "cors";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/foo", (_req: express.Request, res: express.Response) => {
  res.send({
    message: "bar",
  });
});

app.listen(PORT, (): void => {
  console.log(`Listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
