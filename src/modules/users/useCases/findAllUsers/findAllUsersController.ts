import { Request, Response } from "express";
import { FindAllUsersUseCase } from "./findAllUsersUseCase";

export class FindAllUsersController {
  async handle(request: Request, response: Response) {
    const findAllUsers = new FindAllUsersUseCase()
    const result = await findAllUsers.execute()

    return response.json(result)
  }
}