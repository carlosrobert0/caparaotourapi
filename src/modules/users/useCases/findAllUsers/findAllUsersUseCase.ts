import { prisma } from "../../../../database/prismaClient";

export class FindAllUsersUseCase {
  async execute() {
    const users = await prisma.users.findMany({})

    return users
  }
}