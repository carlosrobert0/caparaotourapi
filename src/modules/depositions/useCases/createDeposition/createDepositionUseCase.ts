import { prisma } from "../../../../database/prismaClient";

interface CreateDeposition {
  name: string;
  avatar?: string;
  description: string;
  status: string;
  city_id: string;
  place_id: string;
}


export class CreateDepositionUseCase {
  async execute({
    name, avatar, description, status, place_id, city_id
  }: CreateDeposition) {
    const deposition = await prisma.depositions.create({
      data: {
        name,
        avatar,
        description,
        status,
        place_id,
        city_id
      } as CreateDeposition
    })

    return deposition
  }
}