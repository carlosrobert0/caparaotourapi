import { prisma } from "../../../../database/prismaClient";

export class FindAllCategoriesUseCase {
  async execute() {
    const categories = await prisma.categories.findMany({
      include: {
        Places: true
      }
    })

    return categories
  }
}