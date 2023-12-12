"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCsv = void 0;
const parseCsv = (buffer) => {
    if (!buffer)
        return;
    const stringifiedBuffer = buffer.toString();
    const lines = stringifiedBuffer.split("\n");
    let objKeys = lines[0].replace("\r", "").split(",");
    let response = [];
    if (objKeys.find(i => !i || i === "") !== undefined) {
        throw new Error("Invalid CSV file");
    }
    for (let i = 1; i < lines.length; i++) {
        let obj = {};
        const items = lines[i].replace("\r", "").split(",");
        if (items.length !== objKeys.length) {
            throw new Error("Invalid CSV file");
        }
        for (let j = 0; j < items.length; j++) {
            if (!items[j] || items[j] === "") {
                throw new Error("Invalid CSV file");
            }
            obj[objKeys[j]] = items[j];
        }
        response.push(obj);
    }
    return response;
};
exports.parseCsv = parseCsv;
