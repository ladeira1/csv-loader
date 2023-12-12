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
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesController = void 0;
const parseCsv_1 = require("../utils/parseCsv");
const prisma_1 = require("../services/prisma");
const filesView_1 = require("../views/filesView");
const filesController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        try {
            const peopleData = (_a = req.file) === null || _a === void 0 ? void 0 : _a.buffer;
            if (((_b = req.file) === null || _b === void 0 ? void 0 : _b.mimetype) !== "text/csv") {
                throw new Error("Invalid CSV file");
            }
            const peopleFromCsv = (0, parseCsv_1.parseCsv)(peopleData);
            if (!peopleFromCsv || peopleFromCsv.length === 0) {
                throw new Error("Empty CSV");
            }
            for (let person of peopleFromCsv) {
                const item = yield prisma_1.prisma.person.findFirst({
                    where: {
                        name: { equals: person.name },
                        city: { equals: person.city },
                        country: { equals: person.country },
                        favorite_sport: { equals: person.favorite_sport },
                    }
                });
                if (item)
                    continue;
                yield prisma_1.prisma.person.create({ data: person });
            }
            res.status(200).json(filesView_1.filesView.success());
        }
        catch (err) {
            res.status(500).json(filesView_1.filesView.error(err));
        }
    }),
};
exports.filesController = filesController;
