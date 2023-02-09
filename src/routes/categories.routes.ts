import { Router } from 'express'

import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'
import { CreateCategoryController } from '../modules/categories/useCases/createCategory/createCategoryController'
import { FindAllCategoriesController } from '../modules/categories/useCases/findAllCategories/findAllCategoriesController'
import { FindCategoryByIdController } from '../modules/categories/useCases/findCategoryById/findCategoryByIdController'

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()
const findAllCategoriesController = new FindAllCategoriesController()
const findCategoryByIdController = new FindCategoryByIdController()

categoriesRoutes.post("/category/", ensureAuthenticateUser, createCategoryController.handle)
categoriesRoutes.get("/categories/", ensureAuthenticateUser, findAllCategoriesController.handle)
categoriesRoutes.get("/category/:id", ensureAuthenticateUser, findCategoryByIdController.handle)

export { categoriesRoutes }