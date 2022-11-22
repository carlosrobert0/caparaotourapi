import { Request, Response } from "express";
import { FindAllAddressesUseCase } from "./findAllAddressesUseCase";

export class FindAllAddressesController {
  async handle(request: Request, response: Response) {
    const findAllAddresses = new FindAllAddressesUseCase()
    const result = await findAllAddresses.execute()

    return response.json(result)
  }
}