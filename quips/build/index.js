"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 8000;
const app = (0, express_1.default)();
app.get("/foo", (_req, res) => {
    res.send({
        message: "bar",
    });
});
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
