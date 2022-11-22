import { Request, Response } from "express";
import { FindPlaceByNameUseCase } from "./findPlaceByNameUseCase";

export class FindPlaceByNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.params
    const findPlaceByName = new FindPlaceByNameUseCase()
    const result = await findPlaceByName.execute(name)

    return response.json(result)
  }
}