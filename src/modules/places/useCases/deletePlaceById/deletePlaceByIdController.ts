import { Request, Response } from "express";
import { DeletePlaceByIdUseCase } from "./deletePlaceByIdUseCase";

export class DeletePlaceByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const deletePlaceById = new DeletePlaceByIdUseCase()
    const result = await deletePlaceById.execute(id)

    return response.json(result)
  }
}