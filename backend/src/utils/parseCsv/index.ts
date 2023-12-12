import { Person } from ".prisma/client"

export const parseCsv = (buffer: Buffer | undefined): Person[] | undefined => {
  if(!buffer) return

  const stringifiedBuffer = buffer.toString()
  const lines = stringifiedBuffer.split("\n")
  let objKeys = lines[0].replace("\r", "").split(",")
  let response: Person[] = []

  if(objKeys.find(i => !i || i === "") !== undefined) {
    throw new Error("Invalid CSV file")
  }
  
  for(let i = 1; i < lines.length; i++) {
    let obj: Record<string, any> = {}
    const items = lines[i].replace("\r", "").split(",")
    if(items.length !== objKeys.length) {
      throw new Error("Invalid CSV file")
    }

    for(let j = 0; j < items.length; j++) {
      if(!items[j] || items[j] === "") {
        throw new Error("Invalid CSV file")
      }

      obj[objKeys[j]] = items[j]
    }

    response.push(obj as Person)
  }

  return response
}