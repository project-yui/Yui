import { Router, static as static_ } from "express"
import { resolve } from "path"
import { getStoragePath } from "../../store/config"

export const registerStaticRoutes = (router: Router) => {
  const storage = getStoragePath()
  router.use('/static', static_(resolve(storage, './upload')))
}
