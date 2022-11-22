import { Router } from 'express'

import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'
import { CreateAddressController } from '../modules/addresses/useCases/createAddress/createAddressController'
import { FindAllAddressesController } from '../modules/addresses/useCases/findAllAddresses/findAllAddressesController'

const addressesRoutes = Router()

const createAddressController = new CreateAddressController()
const findAllAddressesController = new FindAllAddressesController()

addressesRoutes.post("/address/", ensureAuthenticateUser, createAddressController.handle)
addressesRoutes.get("/addresses/", ensureAuthenticateUser, findAllAddressesController.handle)

export { addressesRoutes }