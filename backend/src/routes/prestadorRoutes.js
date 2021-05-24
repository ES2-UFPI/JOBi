import { Router } from "express"
import prestadorController from "../controllers/PrestadorController"

const router = new Router()

router.post("/", prestadorController.store)

export default router;