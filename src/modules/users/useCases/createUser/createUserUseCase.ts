import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'

interface ICreateUser {
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}


export class CreateUserUseCase {
  async execute({
    name, email, password, created_at, updated_at
  }: ICreateUser) {
    const userExists = await prisma.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive"
        }
      }
    })

    if(userExists) {
      throw new Error("User already exists")
    }

    const hashPassword = await hash(password, 10)

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashPassword,
        created_at,
        updated_at
      }
    })

    return user
  }
}