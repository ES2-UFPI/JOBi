import { Router } from "express"
import mensagemController from "../controllers/MensagemController"

const router = new Router()

router.post("/", mensagemController.store)

export default router;