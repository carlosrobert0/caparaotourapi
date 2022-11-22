import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { citiesRoutes } from "./cities.routes";
import { placesRoutes } from "./places.routes";
import { addressesRoutes } from "./addresses.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";

const routes = Router()

routes.use(categoriesRoutes)
routes.use(citiesRoutes)
routes.use(placesRoutes)
routes.use(addressesRoutes)
routes.use(usersRoutes)
routes.use(authenticateRoutes)

export { routes }  