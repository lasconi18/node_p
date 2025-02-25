import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { authenticate } from "../services/auth.service";

const router = Router()

router.get("/", authenticate, userController.getAll)
router.get("/:id", authenticate, userController.getById)
router.post("/", authenticate, userController.create)
router.put("/:id", authenticate, userController.update)
router.delete("/:id", authenticate, userController.delete)


export default router