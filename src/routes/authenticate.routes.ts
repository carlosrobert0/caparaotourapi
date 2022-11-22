import { Router } from 'express'

import { AuthenticateUserController } from '../modules/account/authenticateUser/AuthenticateUserContraoller'

const authenticateRoutes = Router()

const authenticateController = new AuthenticateUserController()

authenticateRoutes.post("/authenticate/", authenticateController.handle)

export { authenticateRoutes }