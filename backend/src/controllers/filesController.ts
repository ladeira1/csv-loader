import { Request, Response } from "express";
import { parseCsv } from "../utils/parseCsv";
import { prisma } from "../services/prisma";
import { filesView } from "../views/filesView";

const filesController = {
  create: async (req: Request, res: Response) => {
    try {
      const peopleData = req.file?.buffer
      const peopleFromCsv = parseCsv(peopleData)
      if(!peopleFromCsv || peopleFromCsv.length === 0) {
        throw new Error("Empty CSV")
      }

      for(let person of peopleFromCsv) {
        const item = await prisma.person.findFirst({ 
          where: {
            name: { equals: person.name },
            city: { equals: person.city },
            country: { equals: person.country },
            favorite_sport: { equals: person.favorite_sport },
          }
        })
        if(item) continue;
        
        await prisma.person.create({ data: person })
      }

      res.status(200).json(filesView.success())
    } catch (err) {
      res.status(500).json(filesView.error(err))
    }
  },
}

export { filesController }