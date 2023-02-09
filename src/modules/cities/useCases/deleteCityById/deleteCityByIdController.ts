import { Request, Response } from "express";
import { DeleteCityByIdUseCase } from "./deleteCityByIdUseCase";

export class DeleteCityByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const deleteCityById = new DeleteCityByIdUseCase()
    const result = await deleteCityById.execute(id)

    return response.json(result)
  }
}