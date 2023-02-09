import { Router } from 'express'

import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'

import { CreateCityController } from '../modules/cities/useCases/createCity/createCityController'
import { DeleteCityByIdController } from '../modules/cities/useCases/deleteCityById/deleteCityByIdController'
import { FindAllCitiesController } from '../modules/cities/useCases/findAllCities/findAllCitiesController'
import { FindCityByIdController } from '../modules/cities/useCases/findCityById/findCityByIdController'

const citiesRoutes = Router()

const createCityController = new CreateCityController()
const findAllCitiesController = new FindAllCitiesController()
const findCityByIdController = new FindCityByIdController()
const deleteCityByIdController = new DeleteCityByIdController()

citiesRoutes.post("/city/", ensureAuthenticateUser, createCityController.handle)
citiesRoutes.get("/cities/", ensureAuthenticateUser, findAllCitiesController.handle)
citiesRoutes.get("/cities/:id", ensureAuthenticateUser, findCityByIdController.handle)
citiesRoutes.delete("/cities/:id", ensureAuthenticateUser, deleteCityByIdController.handle)

export { citiesRoutes }