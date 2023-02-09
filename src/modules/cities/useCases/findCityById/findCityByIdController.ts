import { Request, Response } from "express";
import { FindCityByIdUseCase } from "./findCityByIdUseCase";

export class FindCityByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params 
    
    const findCityById = new FindCityByIdUseCase()
    const result = await findCityById.execute(id)

    return response.json(result)
  }
}