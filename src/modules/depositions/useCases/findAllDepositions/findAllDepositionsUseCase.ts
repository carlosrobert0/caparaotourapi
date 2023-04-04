import { prisma } from "../../../../database/prismaClient";

export class FindAllDepositionsUseCase {
  async execute() {
    const depositions = await prisma.depositions.findMany({})

    return depositions
  }
}