"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersView = void 0;
const defaultView_1 = require("./defaultView");
exports.usersView = Object.assign(Object.assign({}, defaultView_1.defaultView), { list: (data) => ({
        data: data
    }) });
