import { Request, Response } from "express";
import { FindPlaceByNameUseCase } from "./findPlaceByNameUseCase";

export class FindPlaceByNameController {
  async handle(request: Request, response: Response) {
    const id = request.query
    const findPlaceByName = new FindPlaceByNameUseCase()
    const result = await findPlaceByName.execute(id)

    return response.json(result)
  }
}