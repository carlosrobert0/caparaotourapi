import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient'

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email
      }
    })

    if(!user) {
      throw new Error("Email or password invalid!")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("Email or password invalid!")
    }

    const token = sign({email}, "a9892792d7b335a1c8c0ba7eb52a8757", {
      subject: user.id,
      expiresIn: '1d'
    })

    return token
  }
}