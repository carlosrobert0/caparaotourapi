import { Request, Response } from "express";
import { FindAllCategoriesUseCase } from "./findAllCategoriesUseCase"; 

export class FindAllCategoriesController {
  async handle(request: Request, response: Response) {
    const findAllCategories = new FindAllCategoriesUseCase()
    const result = await findAllCategories.execute()

    return response.json(result)
  }
}