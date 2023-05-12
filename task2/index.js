const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(8000, () => {
  console.log("Running 8000");
});
