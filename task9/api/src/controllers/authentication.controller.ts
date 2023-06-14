import express, { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import "dotenv/config";

function generateToken(userId: number) {
  const payload = {
    id: userId,
  };

  return jwt.sign(payload, process.env.SECRET_KEY as Secret, {
    expiresIn: "1hr",
  });
}

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.sendStatus(400);
    }

    let user = await User.findOne({ where: { email } });
    if (user) {
      return res.sendStatus(400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user.id);
    return res.status(201).json({ auth_token: token });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    let user = await User.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(400);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.sendStatus(400);
    }

    const token = generateToken(user.id);
    return res.status(200).json({ auth_token: token });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};
