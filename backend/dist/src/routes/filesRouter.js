"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesRouter = void 0;
const express_1 = require("express");
const filesController_1 = require("../controllers/filesController");
const fileMiddleware_1 = require("../middlewares/fileMiddleware");
const router = (0, express_1.Router)();
router.post("/", (0, fileMiddleware_1.fileMiddleware)(), filesController_1.filesController.create);
exports.filesRouter = router;
