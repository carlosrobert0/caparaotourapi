import { Router } from 'express'

import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'

import { CreatePlaceController } from '../modules/places/useCases/createPlace/createPlaceController'
import { DeletePlaceByIdController } from '../modules/places/useCases/deletePlaceById/deletePlaceByIdController'
import { FindAllPlacesController } from '../modules/places/useCases/findAllPlaces/findAllPlacesController'
import { FindPlaceByNameController } from '../modules/places/useCases/findPlaceByName/findPlaceByNameController'

const placesRoutes = Router()

const createPlaceController = new CreatePlaceController()
const findAllPlacesController = new FindAllPlacesController()
const findPlaceByNameController = new FindPlaceByNameController()
const deletePlaceByIdController = new DeletePlaceByIdController()

placesRoutes.post("/place/", ensureAuthenticateUser, createPlaceController.handle)
placesRoutes.get("/places/", ensureAuthenticateUser, findAllPlacesController.handle)
placesRoutes.get("/places/:name", ensureAuthenticateUser, findPlaceByNameController.handle)
placesRoutes.delete("/places/:id", ensureAuthenticateUser, deletePlaceByIdController.handle)

export { placesRoutes }
