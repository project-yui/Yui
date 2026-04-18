import { Router } from "express"
import { registerAppRoutes } from "./register-app-routes"
import { registerProxyRoutes } from "./register-proxy-routes"
import { registerStaticRoutes } from "./register-static-routes"

export const createHTTPRouter = () => {
  const router = Router()
  registerStaticRoutes(router)
  registerProxyRoutes(router)
  registerAppRoutes(router)
  return router
}
