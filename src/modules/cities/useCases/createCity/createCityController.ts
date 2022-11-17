import { Request, Response } from "express";
import { CreateCityUseCase } from "./createCityUseCase";

export class CreateCityController {
  async handle(request: Request, response: Response) {
    const {
      name, image, description
    } = request.body;

    const createCityUseCase = new CreateCityUseCase()
    const result = await createCityUseCase.execute({
      name,
      image,
      description
    })

    return response.json(result)
  }
}