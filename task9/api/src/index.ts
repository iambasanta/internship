import express from "express";
import cors from "cors";
import Router from "./routes";
import sequelize from "./config/database";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(Router);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tables created successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(PORT, (): void => {
  console.log(`Listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
