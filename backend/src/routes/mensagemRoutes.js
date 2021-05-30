import { Router } from "express"
import mensagemController from "../controllers/mensagemController"

const router = new Router()

router.post("/", mensagemController.store)

export default router;