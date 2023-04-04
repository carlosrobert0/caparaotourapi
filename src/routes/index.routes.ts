import { Router } from "express";

import { addressesRoutes } from "./addresses.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { citiesRoutes } from "./cities.routes";
import { depositionsRoutes } from "./depositions.routes";
import { placesRoutes } from "./places.routes";
import { usersRoutes } from "./users.routes";

const routes = Router()

routes.use(categoriesRoutes)
routes.use(citiesRoutes)
routes.use(placesRoutes)
routes.use(addressesRoutes)
routes.use(usersRoutes)
routes.use(authenticateRoutes)
routes.use("/depositions", depositionsRoutes)

export { routes };
