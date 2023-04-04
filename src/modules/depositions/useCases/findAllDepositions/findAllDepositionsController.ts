import { Request, Response } from "express";
import { FindAllDepositionsUseCase } from "./findAllDepositionsUseCase";

export class FindAllDepositionsController {
  async handle(request: Request, response: Response) {
    const findAllDepositions = new FindAllDepositionsUseCase()
    const result = await findAllDepositions.execute()

    return response.json(result)
  }
}