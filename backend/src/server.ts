import express, { Request, Response } from "express"
import cors from "cors"
import { router } from "./routes"
import "dotenv/config"

const PORT = process.env.API_PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/", router)

app.get('/hello', (req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('Server is running in PORT ' + PORT)
  })
}

export { app }