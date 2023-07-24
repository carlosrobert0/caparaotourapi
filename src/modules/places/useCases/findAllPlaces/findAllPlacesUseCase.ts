import { prisma } from "../../../../database/prismaClient";

export class FindAllPlacesUseCase {
  async execute() {
    const places = await prisma.places.findMany({
      include: {
        category: true,
        // Depositions: true
      }
    })

    return places
  }
}