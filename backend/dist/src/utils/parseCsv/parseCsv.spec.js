"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const index_1 = require("./index");
describe('parseCsv test suite', () => {
    it("should return the correct array", () => {
        const filePath = path_1.default.join(__dirname, "..", "..", "..", "__tests__", "mocks", "correct_csv.csv");
        const file = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
        const buffer = Buffer.from(file);
        const response = (0, index_1.parseCsv)(buffer);
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
        ]);
    });
    it('should throw an error when an invalid csv is passed', () => {
        const filePath = path_1.default.join(__dirname, "..", "..", "..", "__tests__", "mocks", "invalid_csv.csv");
        const file = fs_1.default.readFileSync(filePath, { encoding: "utf8" });
        const buffer = Buffer.from(file);
        expect(() => (0, index_1.parseCsv)(buffer)).toThrow("Invalid CSV file");
    });
});
