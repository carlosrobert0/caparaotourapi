import { Request, Response } from "express";
import { FindCategoryByIdUseCase } from "./findCategoriesByIdUseCase";

export class FindCategoryByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params 
    
    const findCategoryById = new FindCategoryByIdUseCase()
    const result = await findCategoryById.execute(id)

    return response.json(result)
  }
}