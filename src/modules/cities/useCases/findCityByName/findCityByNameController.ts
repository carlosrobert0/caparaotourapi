import { Request, Response } from "express";
import { FindCityByNameUseCase } from "./findCityByNameUseCase";

export class FindCityByNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.params 
    
    const findCityByName = new FindCityByNameUseCase()
    const result = await findCityByName.execute(name)

    return response.json(result)
  }
}