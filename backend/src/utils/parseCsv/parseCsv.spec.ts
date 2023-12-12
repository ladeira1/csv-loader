import path from "path"
import fs from "fs"
import { parseCsv } from "./index"

describe('parseCsv test suite', () => {
  it("should return the correct array", () => {
    const filePath = path.join(__dirname, "..", "..", "..", "__tests__", "mocks", "correct_csv.csv")
    const file = fs.readFileSync(filePath, { encoding: "utf8" })
    const buffer = Buffer.from(file)
    const response = parseCsv(buffer)
    expect(response).toEqual([
      { 
        name: "John Doe",
        city: "New York",
        country: "USA",
        favorite_sport: "Basketball",
      },
      { 
        name: "Jane Smith",
        city: "London",
        country: "UK",
        favorite_sport: "Football",
      },
    ])
  })

  it('should throw an error when an invalid csv is passed', () => {
    const filePath = path.join(__dirname, "..", "..", "..", "__tests__", "mocks", "invalid_csv.csv")
    const file = fs.readFileSync(filePath, { encoding: "utf8" })
    const buffer = Buffer.from(file)
    expect(() => parseCsv(buffer)).toThrow("Invalid CSV file")
  })
 
})