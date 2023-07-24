import { Request, Response } from "express";
import { UpdatePlaceByIdUseCase } from "./updatePlaceByIdUseCase";

export class UpdatePlaceByIdController {
  async handle(request: Request, response: Response) {
    const {
      name, image, description, category_id, address_id, city_id
    } = request.body;

    const { id } = request.params
    const updatePlaceById = new UpdatePlaceByIdUseCase()
    const result = await updatePlaceById.execute(id, name, image, description, category_id, address_id, city_id)

    return response.json(result)
  }
}