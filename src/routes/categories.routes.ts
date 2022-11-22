import { Router } from 'express'

import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'
import { CreateCategoryController } from '../modules/categories/useCases/createCategory/createCategoryController'
import { FindAllCategoriesController } from '../modules/categories/useCases/findAllCategories/findAllCategoriesController'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()
const findAllCategoriesController = new FindAllCategoriesController()

categoriesRoutes.post("/category/", ensureAuthenticateUser, createCategoryController.handle)
categoriesRoutes.get("/categories/", ensureAuthenticateUser, findAllCategoriesController.handle)

export { categoriesRoutes }