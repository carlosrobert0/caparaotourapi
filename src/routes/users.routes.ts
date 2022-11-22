import { Router } from 'express'
import { ensureAuthenticateUser } from '../middlewares/ensureAuthenticateUser'

import { CreateUserController } from '../modules/users/useCases/createUser/createUserController'
import { FindAllUsersController } from '../modules/users/useCases/findAllUsers/findAllUsersController'
import { UpdateUserController } from '../modules/users/useCases/updateUser/updateUserController'

const usersRoutes = Router()

const findAllUsersController = new FindAllUsersController()
const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()

usersRoutes.get("/users", ensureAuthenticateUser, findAllUsersController.handle)
usersRoutes.post("/user/", createUserController.handle)
usersRoutes.put("/user/:id", ensureAuthenticateUser, updateUserController.handle)

export { usersRoutes }