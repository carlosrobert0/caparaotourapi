import { Request, Response } from "express";
import { CreateDepositionUseCase } from "./createDepositionUseCase";

export class CreateDepositionController {
  async handle(request: Request, response: Response) {
    const {
      name, avatar, description, status, place_id, city_id, avaliation
    } = request.body;

    const createDepositionUseCase = new CreateDepositionUseCase()
    const result = await createDepositionUseCase.execute({
      name,
      avatar,
      description,
      status,
      place_id,
      city_id,
      avaliation
    })

    return response.json(result)
  }
}