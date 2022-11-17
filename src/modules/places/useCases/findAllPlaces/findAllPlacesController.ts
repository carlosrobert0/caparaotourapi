import { Request, Response } from "express";
import { FindAllPlacesUseCase } from "./findAllPlacesUseCase";

export class FindAllPlacesController {
  async handle(request: Request, response: Response) {
    const findAllPlaces = new FindAllPlacesUseCase()
    const result = await findAllPlaces.execute()

    return response.json(result)
  }
}