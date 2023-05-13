const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(8000, () => {
  console.log("Running 8000");
});
