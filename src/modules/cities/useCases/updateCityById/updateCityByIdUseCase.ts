import { prisma } from "../../../../database/prismaClient";

export class UpdateCityByIdUseCase {
  async execute(id: string, name: string, image: string, description: string) {
    await prisma.cities.update({
      where: {
        id
      },
      data: {
        name,
        image,
        description
      }
    })
  }
}