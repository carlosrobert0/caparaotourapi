import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      name, email, password, created_at, updated_at
    } = request.body;

    const createUserUseCase = new CreateUserUseCase()
    const result = await createUserUseCase.execute({
      name,
      email,
      password,
      created_at,
      updated_at
    })

    return response.json(result)
  }
}