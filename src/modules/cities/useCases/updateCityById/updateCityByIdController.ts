import { Request, Response } from "express";
import { UpdateCityByIdUseCase } from "./updateCityByIdUseCase";

export class UpdateCityByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const {
      name, image, description
    } = request.body;

    const updateCityById = new UpdateCityByIdUseCase()
    const result = await updateCityById.execute(id, name, image, description)

    return response.json(result)
  }
}