import { Request, Response } from "express";
import { FindAllCitiesUseCase } from "./findAllCitiesUseCase";

export class FindAllCitiesController {
  async handle(request: Request, response: Response) {
    const findAllCities = new FindAllCitiesUseCase()
    const result = await findAllCities.execute()

    return response.json(result)
  }
}