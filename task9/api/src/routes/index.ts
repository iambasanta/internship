import express from "express";

import AuthRouter from "./authentication.router";

const router = express.Router();

router.use("/auth", AuthRouter);

export default router;
