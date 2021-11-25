import { Router } from "express"
import relatorio_conexoesController from "../controllers/Relatorio_conexoesController"

const router = new Router()

//router.post("/", relatorio_conexoesController.store)
router.get("/select", relatorio_conexoesController.index)
//router.put("/:id", relatorio_conexoesController.update)
//router.post("/curriculo", relatorio_conexoesController.curriculo)


export default router;