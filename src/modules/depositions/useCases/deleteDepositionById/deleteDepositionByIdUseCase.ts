import { prisma } from "../../../../database/prismaClient";

export class DeleteDepositionByIdUseCase {
  async execute(id: string) {
    await prisma.depositions.delete({
      where: {
        id
      },
    })
  }
}