import { Router } from "express"
import { filesRouter } from "./routes/filesRouter"

const router = Router()
router.use("/files", filesRouter)

export { router }