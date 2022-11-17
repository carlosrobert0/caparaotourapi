import { Request, Response } from "express";
import { CreatePlaceUseCase } from "./createPlaceUseCase"; 

export class CreatePlaceController {
  async handle(request: Request, response: Response) {
    const {
      name, image, description, category_id, address_id
    } = request.body;

    const createPlaceUseCase = new CreatePlaceUseCase()
    const result = await createPlaceUseCase.execute({
      name,
      image,
      description,
      category_id,
      address_id
    })

    return response.json(result)
  }
}