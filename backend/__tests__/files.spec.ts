import { app } from "../src/server"
import request from "supertest"

describe("POST /files", () => {
  it("should save users in the database", async () => {
    const response = await request(app)
      .post("/api/files")
      .attach("file", `${__dirname}/mocks/correct_csv.csv`)
    
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      message: "The file was uploaded successfully."
    })
  })

  it("should throw an error when an invalid csv is sent", async () => {
    const response = await request(app)
      .post("/api/files")
      .attach("file", `${__dirname}/mocks/invalid_csv.csv`)
    
    expect(response.status).toBe(500)
    expect(response.body).toMatchObject({
      message: "Invalid CSV file"
    })
  })
})