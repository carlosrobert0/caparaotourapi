import { prisma } from "../../../../database/prismaClient"
import { hash } from 'bcrypt'

interface ICreateCategory {
  name: string;
  created_at: Date;
  updated_at: Date;
}

export class CreateCategoryUseCase {
  async execute({ name, created_at, updated_at }: ICreateCategory) {
    const categoryExists = await prisma.categories.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive"
        }
      }
    })

    if(categoryExists) {
      throw new Error("Category already exists")
    }

    const category = await prisma.categories.create({
      data: {
        name,
        created_at,
        updated_at
      }
    })

    return category
  }
}