import { prisma } from "../../../../database/prismaClient";

export class FindAllPlacesUseCase {
  async execute() {
    const places = await prisma.places.findMany({})

    return places
  }
}