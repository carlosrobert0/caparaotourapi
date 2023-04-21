import { prisma } from "../../../../database/prismaClient";

export class FindCategoryByIdUseCase {
  async execute(id: string) {
    const category = await prisma.categories.findFirst({ 
      where: {
        id: {
          equals: id,
          mode: "insensitive",
        },
      },
      include: {
        Places: true
      }
    })

    return category
  }
}