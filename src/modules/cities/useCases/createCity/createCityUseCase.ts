import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'

interface ICreateCity {
  name: string;
  image: string;
  description: string;
}


export class CreateCityUseCase {
  async execute({
    name, image, description
  }: ICreateCity) {
    const cityExists = await prisma.cities.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    })

    if(cityExists) {
      throw new Error("City already exists")
    }

    const city = await prisma.cities.create({
      data: {
        name,
        image,
        description
      }
    })

    return city
  }
}