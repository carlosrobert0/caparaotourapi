import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserContraoller";
import { CreateUserController } from "./modules/users/useCases/createUser/createUserController";
import { CreateCategoryController } from "./modules/categories/useCases/createCategory/createCategoryController";
import { CreateCityController } from "./modules/cities/useCases/createCity/createCityController";
import { CreateAddressController } from "./modules/addresses/useCases/createAddress/createAddressController";
import { CreatePlaceController } from "./modules/places/useCases/createPlace/createPlaceController";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { FindAllCitiesUseCase } from "./modules/cities/useCases/findAllCities/findAllCitiesUseCase";
import { FindAllCitiesController } from "./modules/cities/useCases/findAllCities/findAllCitiesController";
import { FindAllCategoriesController } from "./modules/categories/useCases/findAllCategories/findAllCategoriesController";
import { FindCityByNameController } from "./modules/cities/useCases/findCityByName/findCityByNameController";
import { FindAllPlacesController } from "./modules/places/useCases/findAllPlaces/findAllPlacesController";
import { FindPlaceByNameController } from "./modules/places/useCases/findPlaceByName/findPlaceByNameController";
import { FindAllAddressesController } from "./modules/addresses/useCases/findAllAddresses/findAllAddressesController";

const routes = Router()

const authenticateController = new AuthenticateUserController()
const createUserController = new CreateUserController()
const createCityController = new CreateCityController()
const createAddressController = new CreateAddressController()
const createCategoryController = new CreateCategoryController()
const createPlaceController = new CreatePlaceController()
const findAllCitiesController = new FindAllCitiesController()
const findAllCategoriesController = new FindAllCategoriesController()
const findCityByNameController = new FindCityByNameController()
const findAllPlacesController = new FindAllPlacesController()
const findPlaceByNameController = new FindPlaceByNameController()
const findAllAddressesController = new FindAllAddressesController()

routes.post("/authenticate/", authenticateController.handle)

routes.post("/user/", createUserController.handle)

routes.post("/city/", ensureAuthenticateUser, createCityController.handle)
routes.get("/cities/", ensureAuthenticateUser, findAllCitiesController.handle)
routes.get("/cities/:name", ensureAuthenticateUser, findCityByNameController.handle)

routes.post("/address/", ensureAuthenticateUser, createAddressController.handle)
routes.get("/addresses/", ensureAuthenticateUser, findAllAddressesController.handle)


routes.post("/category/", ensureAuthenticateUser, createCategoryController.handle)
routes.get("/categories/", ensureAuthenticateUser, findAllCategoriesController.handle)

routes.post("/place/", ensureAuthenticateUser, createPlaceController.handle)
routes.get("/places/", ensureAuthenticateUser, findAllPlacesController.handle)
routes.get("/places/:name", ensureAuthenticateUser, findPlaceByNameController.handle)
export { routes }  