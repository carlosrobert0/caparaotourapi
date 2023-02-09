import { prisma } from "../../../../database/prismaClient";

export class DeleteCityByIdUseCase {
  async execute(id: string) {
    await prisma.cities.delete({
      where: {
        id
      },
    })
  }
}