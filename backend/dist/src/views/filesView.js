"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesView = void 0;
const defaultView_1 = require("./defaultView");
exports.filesView = Object.assign(Object.assign({}, defaultView_1.defaultView), { success: () => ({
        message: "The file was uploaded successfully."
    }) });
