import { Person } from ".prisma/client"
import { defaultView } from "./defaultView"

export const usersView = { 
  ...defaultView,
  list: (data: Person[]) => ({
    data: data
  })
}