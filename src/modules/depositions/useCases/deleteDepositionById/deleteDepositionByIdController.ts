import { Request, Response } from "express";
import { DeleteDepositionByIdUseCase } from "./deleteDepositionByIdUseCase";

export class DeleteDepositionByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const deleteDepositionById = new DeleteDepositionByIdUseCase()
    const result = await deleteDepositionById.execute(id)

    return response.json(result)
  }
}