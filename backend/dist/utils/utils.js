"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripUndefined = stripUndefined;
function stripUndefined(obj) {
    return JSON.parse(JSON.stringify(obj));
}
