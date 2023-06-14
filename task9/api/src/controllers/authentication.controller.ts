import express, { Request, Response } from "express";
import User from "../models/user";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.sendStatus(400);
    }

    let user = await User.findOne({ where: { email } });
    if (user) {
      return res
        .sendStatus(400)
        .json({ error: "Email has already been taken" });
    }

    user = await User.create({
      username,
      email,
      password,
    });

    return res.sendStatus(201);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};
