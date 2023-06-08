import { prisma } from "../../../../database/prismaClient";

export class DeleteAllDepositionsUseCase {
  async execute() {
    await prisma.depositions.deleteMany()
  }
}