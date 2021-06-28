import { Router } from "express"
import conexaoController from "../controllers/ConexaoController"

const router = new Router()

router.post("/", conexaoController.store)
router.get("/chats_contratante/:id", conexaoController.chats_contratante)
router.get("/chats_prestador/:id", conexaoController.chats_prestador)

export default router;