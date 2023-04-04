import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeposition {
  depositionUpdate: any;
  name: string;
  avatar: string;
  description: string;
  status: string;
  place_id: string;
  city_id: string;
}


export class UpdateDepositionUseCase {
  async execute({
    depositionUpdate,
    avatar,
    city_id,
    description,
    name,
    place_id,
    status
  }: IUpdateDeposition) {
    try {
      const deposition = await prisma.depositions.update({
        where: {
          id: depositionUpdate
        },
        data: {
          avatar,
          city_id,
          description,
          name,
          place_id,
          status
        }
      })
      console.log('deu bom')
      return deposition
    } catch (error) {
      console.log('deu ruim')
      console.log(error)
    }
  }
}