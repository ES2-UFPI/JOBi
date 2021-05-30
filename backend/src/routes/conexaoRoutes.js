import { Router } from "express"
import conexaoController from "../controllers/ConexaoController"

const router = new Router()

router.post("/", conexaoController.store)

export default router;