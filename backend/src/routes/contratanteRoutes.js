import { Router } from "express"
import contratanteController from "../controllers/ContratanteController"

const router = new Router()

router.post("/", contratanteController.store)
router.get("/select", contratanteController.index)

export default router;