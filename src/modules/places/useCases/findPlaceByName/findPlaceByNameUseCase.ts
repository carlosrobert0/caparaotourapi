import { prisma } from "../../../../database/prismaClient";

export class FindPlaceByNameUseCase {
  async execute(name: any) {
    const placeByName = await prisma.places.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    })

    return placeByName
  }
}