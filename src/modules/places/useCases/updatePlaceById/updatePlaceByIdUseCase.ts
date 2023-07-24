import { prisma } from "../../../../database/prismaClient";

export class UpdatePlaceByIdUseCase {
  async execute(
    id: string, name: string, image: string, description: string, category_id: string,
    address_id: string, city_id: string) {
    await prisma.places.update({
      where: {
        id
      },
      data: {
        name,
        image,
        description,
        category_id,
        address_id,
        city_id,
      }
    })
  }
}