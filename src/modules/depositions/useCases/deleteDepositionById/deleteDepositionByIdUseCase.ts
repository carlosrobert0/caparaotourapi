import { prisma } from "../../../../database/prismaClient";

export class DeleteDepositionByIdUseCase {
  async execute(id: string) {
    const deposition = await prisma.depositions.findFirst({
      where: {
        id
      }
    })

    if (!deposition) {
      throw new Error(`Depoimento com id ${id} não existe.`)
    }

    await prisma.depositions.delete({
      where: {
        id
      },
    })
  }
}