import { Request, Response } from "express";
import { CreateAddressUseCase } from "./createAddressUseCase";

export class CreateAddressController {
  async handle(request: Request, response: Response) {
    const {
      zip_code, street, neighborhood, number
    } = request.body;

    const createAddressUseCase = new CreateAddressUseCase()
    const result = await createAddressUseCase.execute({
      zip_code,
      street,
      neighborhood,
      number
    })

    return response.json(result)
  }
}