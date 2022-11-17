import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'

interface ICreateAddress {
  zip_code: string;
  street: string;
  neighborhood: string;
  number: string | null;
}


export class CreateAddressUseCase {
  async execute({
    zip_code, street, neighborhood, number
  }: ICreateAddress) {
    const addressExists = await prisma.addresses.findFirst({
      where: {
        street: {
          equals: street,
          mode: "insensitive"
        }
      }
    })

    if(addressExists) {
      throw new Error("Address already exists")
    }

    const address = await prisma.addresses.create({
      data: {
        zip_code,
        street,
        neighborhood,
        number
      }
    })

    return address
  }
}