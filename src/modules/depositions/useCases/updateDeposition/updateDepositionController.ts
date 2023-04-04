import { Request, Response } from "express";
import { UpdateDepositionUseCase } from "./updateDepositionUseCase";

export class UpdateDepositionController {
  async handle(request: Request, response: Response) {
    const depositionUpdate = request.params.id
    const {
      name, avatar, description, status, place_id, city_id
    } = request.body;

    const updateDepositionUseCase = new UpdateDepositionUseCase()
    const result = await updateDepositionUseCase.execute({
      depositionUpdate,
      name, 
      avatar, 
      description, 
      status, 
      place_id, 
      city_id
    })

    return response.json(result)
  }
}