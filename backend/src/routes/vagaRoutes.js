import { Router } from "express"
import vagaController from "../controllers/VagaController"

const router = new Router()

router.post("/", vagaController.store);
router.get("/contratante/:id", vagaController.index);
router.get("/:id", vagaController.select);
router.put("/:id", vagaController.update);

export default router;