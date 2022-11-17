import { prisma } from "../../../../database/prismaClient";

export class FindAllCategoriesUseCase {
  async execute() {
    const categories = await prisma.categories.findMany({})

    return categories
  }
}