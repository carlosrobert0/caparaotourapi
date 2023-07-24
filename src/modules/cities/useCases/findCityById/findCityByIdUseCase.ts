import { prisma } from "../../../../database/prismaClient";

export class FindCityByIdUseCase {
  async execute(id: string) {
    const city = await prisma.cities.findFirst({ 
      where: {
        id
      },
      include: {
        places: {
          include: {
            category: true,
            Depositions: true,
          }
        }
      }
    })

    return city
  }
}