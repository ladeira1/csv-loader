import express from "express"
import cors from "cors"
import { router } from "./routes"
import "dotenv/config"

const PORT = process.env.API_PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/", router)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('Server is running in PORT ' + PORT)
  })
}

export { app }