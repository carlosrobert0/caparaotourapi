import { prisma } from "../../../../database/prismaClient";

export class FindCityByNameUseCase {
  async execute(name: string) {
    const cities = await prisma.cities.findFirst({ 
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        }
      },
    })

    return cities
  }
}