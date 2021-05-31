import { Router } from "express"
import userController from "../controllers/UserController"

const router = new Router()

router.post("/login", userController.select)

export default router;