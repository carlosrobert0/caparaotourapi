import { prisma } from "../../../../database/prismaClient";

export class FindCityByNameUseCase {
  async execute(name: string) {
    const cities = await prisma.cities.findMany({ 
      where: {
        name: name,
      },
    })

    return cities
  }
}