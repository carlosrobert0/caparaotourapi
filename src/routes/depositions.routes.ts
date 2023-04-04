import { Router } from 'express'

import { CreateDepositionController } from '../modules/depositions/useCases/createDeposition/createDepositionController'
import { DeleteDepositionByIdController } from '../modules/depositions/useCases/deleteDepositionById/deleteDepositionByIdController'
import { FindAllDepositionsController } from '../modules/depositions/useCases/findAllDepositions/findAllDepositionsController'
import { UpdateDepositionController } from '../modules/depositions/useCases/updateDeposition/updateDepositionController'


const depositionsRoutes = Router()

const createDepositionController = new CreateDepositionController()
const findAllDepositionsController = new FindAllDepositionsController()
const deleteDepositionByIdController = new DeleteDepositionByIdController()
const updateDepositionController = new UpdateDepositionController()

depositionsRoutes.post("/", createDepositionController.handle)
depositionsRoutes.get("/", findAllDepositionsController.handle)
depositionsRoutes.put("/:id", updateDepositionController.handle)
depositionsRoutes.delete("/:id", deleteDepositionByIdController.handle)

export { depositionsRoutes }
