import { app } from "../src/server"
import request from "supertest"

describe("GET /users", () => {
  it("should list all users in the database", async () => {
    await request(app)
      .post("/api/files")
      .attach("file", `${__dirname}/mocks/correct_csv.csv`)
    const response = await request(app).get("/api/users")
    
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      data: [
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
      ]
    })
  })

  it("should list all users filtered by a query in the database", async () => {
    await request(app)
      .post("/api/files")
      .attach("file", `${__dirname}/mocks/correct_csv.csv`)
    const response = await request(app).get("/api/users?q=jane")
    
    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      data: [
        { 
          city: "London",
          country: "UK",
          favorite_sport: "Football",
          name: "Jane Smith",
        },
      ]
    })
  })
})