import express, { Request, Response, NextFunction } from "express";
import User from "../models/user";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import "dotenv/config";

export const myProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log(token);

  try {
    if (!token) {
      return res.sendStatus(401);
    }

    const decodedUserInfo = jwt.verify(
      token,
      process.env.SECRET_KEY as Secret
    ) as JwtPayload;

    const userId = decodedUserInfo.id;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });

    return res.status(200).json({ user: user });
  } catch (error) {
    console.error(error);
    return res.sendStatus(401);
  }
};
