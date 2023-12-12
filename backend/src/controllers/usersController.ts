import { Request, Response } from "express";
import { prisma } from "../services/prisma";
import { usersView } from "../views/usersView";

const usersController = {
  list: async (req: Request, res: Response) => {
    try {
      const { q } = req.query
      let filter = {}

      if(q) {
        filter = {
          ...filter,
          where: {
            name: {
              contains: String(q)?.trim()
            }
          }
        }
      }

      const data = await prisma.person.findMany({
        select: {
          city: true,
          country: true,
          favorite_sport: true,
          name: true,
          id: true,
        },
        ...filter
      })

      res.status(200).json(usersView.list(data))
    } catch (err) {
      res.status(500).json(usersView.error(err))
    }
  },
}

export { usersController }