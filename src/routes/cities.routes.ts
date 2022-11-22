import { Router } from 'express'

import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'

import { CreateCityController } from '../modules/cities/useCases/createCity/createCityController'
import { FindAllCitiesController } from '../modules/cities/useCases/findAllCities/findAllCitiesController'
import { FindCityByNameController } from '../modules/cities/useCases/findCityByName/findCityByNameController'

const citiesRoutes = Router()

const createCityController = new CreateCityController()
const findAllCitiesController = new FindAllCitiesController()
const findCityByNameController = new FindCityByNameController()

citiesRoutes.post("/city/", ensureAuthenticateUser, createCityController.handle)
citiesRoutes.get("/cities/", ensureAuthenticateUser, findAllCitiesController.handle)
citiesRoutes.get("/cities/:name", ensureAuthenticateUser, findCityByNameController.handle)

export { citiesRoutes }