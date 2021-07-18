import { Router } from "express"
import notificacaoController from "../controllers/NotificacaoController"

const router = new Router()
 
router.post("/", notificacaoController.store);
router.get("/:id", notificacaoController.select_id);
router.put("/:id", notificacaoController.update);
router.get("/navigation/:id", notificacaoController.select_toSee);

export default router;