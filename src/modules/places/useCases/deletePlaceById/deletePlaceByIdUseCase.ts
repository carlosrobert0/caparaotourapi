import { prisma } from "../../../../database/prismaClient";

export class DeletePlaceByIdUseCase {
  async execute(id: string) {
    await prisma.places.delete({
      where: {
        id
      },
    })
  }
}