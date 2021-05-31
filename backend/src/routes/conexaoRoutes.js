import { Router } from "express"
import conexaoController from "../controllers/ConexaoController"

const router = new Router()

router.post("/", conexaoController.store)
router.post("/chats_contratante", conexaoController.chats_contratante)
router.post("/chats_prestador", conexaoController.chats_prestador)

export default router;