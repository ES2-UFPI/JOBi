import { Router } from "express"
import homeController from "../controllers/HomeController"

const router = new Router()

router.get("/cadastro", homeController.index)

export default router;