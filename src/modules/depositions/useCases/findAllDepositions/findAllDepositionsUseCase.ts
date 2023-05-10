import { prisma } from "../../../../database/prismaClient";

export class FindAllDepositionsUseCase {
  async execute() {
    const depositions = await prisma.depositions.findMany({
      include: {
        city: true,
        place: {
          include: {
            category: true
          },
        }
      }
    })

    return depositions
  }
}