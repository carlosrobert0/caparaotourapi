import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const {
      name, created_at, updated_at
    } = request.body;

    const createCategoryUseCase = new CreateCategoryUseCase()
    const result = await createCategoryUseCase.execute({
      name,
      created_at,
      updated_at
    })

    return response.json(result)
  }
}