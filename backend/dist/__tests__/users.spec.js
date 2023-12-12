"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../src/server");
const supertest_1 = __importDefault(require("supertest"));
describe("GET /users", () => {
    it("should list all users in the database", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(server_1.app)
            .post("/api/files")
            .attach("file", `${__dirname}/mocks/correct_csv.csv`);
        const response = yield (0, supertest_1.default)(server_1.app).get("/api/users");
        expect(response.status).toBe(200);
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
        });
    }));
    it("should list all users filtered by a query in the database", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(server_1.app)
            .post("/api/files")
            .attach("file", `${__dirname}/mocks/correct_csv.csv`);
        const response = yield (0, supertest_1.default)(server_1.app).get("/api/users?q=jane");
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            data: [
                {
                    city: "London",
                    country: "UK",
                    favorite_sport: "Football",
                    name: "Jane Smith",
                },
            ]
        });
    }));
});
