import express from "express";
import { myProfile } from "../controllers/user.controller";

const router = express.Router();

router.get("/profile", myProfile);

export default router;
