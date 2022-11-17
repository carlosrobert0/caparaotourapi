import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(
  request: Request, response: Response, next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    })
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(
      token, 
      "a9892792d7b335a1c8c0ba7eb52a8757"
    ) as IPayload

    request.id_user = sub;

    return next()
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token!",
    })
  }
}