import { Router } from 'express'

import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'

import { CreatePlaceController } from '../modules/places/useCases/createPlace/createPlaceController'
import { DeletePlaceByIdController } from '../modules/places/useCases/deletePlaceById/deletePlaceByIdController'
import { FindAllPlacesController } from '../modules/places/useCases/findAllPlaces/findAllPlacesController'
import { FindPlaceByIdController } from '../modules/places/useCases/findPlaceById/findPlaceByIdController'

const placesRoutes = Router()

const createPlaceController = new CreatePlaceController()
const findAllPlacesController = new FindAllPlacesController()
const findPlaceByIdController = new FindPlaceByIdController()
const deletePlaceByIdController = new DeletePlaceByIdController()

placesRoutes.post("/place/", ensureAuthenticateUser, createPlaceController.handle)
placesRoutes.get("/places/", findAllPlacesController.handle)
placesRoutes.get("/places/:id", findPlaceByIdController.handle)
placesRoutes.delete("/places/:id", ensureAuthenticateUser, deletePlaceByIdController.handle)

export { placesRoutes }

