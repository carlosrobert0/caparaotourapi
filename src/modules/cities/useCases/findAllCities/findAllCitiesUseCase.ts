import { prisma } from "../../../../database/prismaClient";

export class FindAllCitiesUseCase {
  async execute() {
    const cities = await prisma.cities.findMany({
      include: {
        places: true
      }
    })

    return cities
  }
}