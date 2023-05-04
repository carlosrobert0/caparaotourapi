import { Request, Response } from "express";
import { FindPlaceByIdUseCase } from "./findPlaceByIdUseCase";

export class FindPlaceByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.query
    const findPlaceById = new FindPlaceByIdUseCase()
    const result = await findPlaceById.execute(id)

    return response.json(result)
  }
}