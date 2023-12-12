import { Router } from "express"
import { filesRouter } from "./routes/filesRouter"
import { usersRouter } from "./routes/usersRouter"

const router = Router()
router.use("/files", filesRouter)
router.use("/users", usersRouter)

export { router }