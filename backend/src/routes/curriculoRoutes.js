import { Router } from "express"


import curriculoController from "../controllers/CurriculoController";

const router = new Router()

router.post("/", curriculoController.store)

export default router;