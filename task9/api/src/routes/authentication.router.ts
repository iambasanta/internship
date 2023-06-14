import express from "express";
import { register } from "../controllers/authentication.controller";

const router = express.Router();

router.post("/register", register);

router.post("/login", (req: express.Request, res: express.Response) => {
  res.send({
    message: "user login",
  });
});

export default router;
