import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'

interface ICreatePlace {
  name: string;
  image: string;
  description: string;
  category_id: string;
  address_id: string;
}


export class CreatePlaceUseCase {
  async execute({
    name, image, description, category_id, address_id
  }: ICreatePlace) {
    const placeExists = await prisma.places.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    })

    if(placeExists) {
      throw new Error("Place already exists")
    }

    const place = await prisma.places.create({
      data: {
        name,
        image,
        description,
        category_id,
        address_id
      }
    })

    return place
  }
}