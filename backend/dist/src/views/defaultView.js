"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultView = void 0;
exports.defaultView = {
    error: (err) => {
        var _a;
        return ({
            message: (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : "Unidentified error"
        });
    }
};
