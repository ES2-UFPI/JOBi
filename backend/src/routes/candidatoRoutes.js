import { Router } from "express"
import candidatoController from "../controllers/CandidatoController"

const router = new Router()

router.post("/", candidatoController.store);
router.get("/vaga/:id", candidatoController.index);
router.get("/:id", candidatoController.select);
router.put("/:id", candidatoController.update);

export default router;