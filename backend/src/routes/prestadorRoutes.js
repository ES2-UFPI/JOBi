import { Router } from "express"
import prestadorController from "../controllers/PrestadorController"

const router = new Router()

router.post("/", prestadorController.store)
router.get("/select", prestadorController.index)
router.put("/:id", prestadorController.update)
router.post("/curriculo", prestadorController.curriculo)


export default router;