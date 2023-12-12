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
exports.usersController = void 0;
const prisma_1 = require("../services/prisma");
const usersView_1 = require("../views/usersView");
const usersController = {
    list: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const { q } = req.query;
            let filter = {};
            if (q) {
                filter = Object.assign(Object.assign({}, filter), { where: {
                        name: {
                            contains: (_a = String(q)) === null || _a === void 0 ? void 0 : _a.trim()
                        }
                    } });
            }
            const data = yield prisma_1.prisma.person.findMany(Object.assign({ select: {
                    city: true,
                    country: true,
                    favorite_sport: true,
                    name: true,
                    id: true,
                } }, filter));
            res.status(200).json(usersView_1.usersView.list(data));
        }
        catch (err) {
            res.status(500).json(usersView_1.usersView.error(err));
        }
    }),
};
exports.usersController = usersController;
