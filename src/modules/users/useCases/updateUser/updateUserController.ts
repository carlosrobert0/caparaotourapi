import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const userUpdate = request.params.id
    const {
      name, email, password, created_at, updated_at
    } = request.body;

    const updateUserUseCase = new UpdateUserUseCase()
    const result = await updateUserUseCase.execute({
      userUpdate,
      name,
      email,
      password,
      created_at,
      updated_at
    })

    return response.json(result)
  }
}