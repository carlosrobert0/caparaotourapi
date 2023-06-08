import { Request, Response } from "express";
import { DeleteAllDepositionsUseCase } from "./deleteAllDepositionsUseCase";

export class DeleteAllDepositionsController {
  async handle(request: Request, response: Response) {
    const deleteAllDepositions = new DeleteAllDepositionsUseCase()
    const result = await deleteAllDepositions.execute()

    return response.json(result)
  }
}