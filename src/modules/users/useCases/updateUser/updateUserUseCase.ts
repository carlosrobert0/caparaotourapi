import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'

interface IUpdateUser {
  userUpdate: any;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}


export class UpdateUserUseCase {
  async execute({
    userUpdate, name, email, password, created_at, updated_at
  }: IUpdateUser) {
    const hashPassword = await hash(password, 10)

    try {
      const user = await prisma.users.update({
        where: {
          email: userUpdate
        }, 
        data: {
          name,
          email, 
          password: hashPassword, 
          created_at, 
          updated_at
        }
      })
      console.log('deu bom')
      return user
    } catch (error) {
      console.log('deu ruim')
      console.log(error)
    }
  }
}