import { Router } from "express";
import { filesController } from "../controllers/filersController";
import { fileMiddleware } from "../middlewares/fileMiddleware";

const router = Router()
router.post("/", fileMiddleware(), filesController.create)

export const filesRouter = router