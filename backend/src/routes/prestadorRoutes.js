import { Router } from "express"
import prestadorController from "../controllers/PrestadorController"

const router = new Router()

router.post("/", prestadorController.store)
router.get("/select", prestadorController.index)

export default router;