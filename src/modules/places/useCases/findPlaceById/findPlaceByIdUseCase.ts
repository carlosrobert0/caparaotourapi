import { prisma } from "../../../../database/prismaClient";

export class FindPlaceByIdUseCase {
  async execute(id: any) {
    const placeById = await prisma.places.findFirst({
      where: {
        id
      },
      include: {
        address: true,
        category: true,
        Depositions: true,
      },
    })

    return placeById
  }
}