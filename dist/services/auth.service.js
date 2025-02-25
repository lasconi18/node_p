"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authenticate = (req, res, next) => {
    var _a;
    const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "Acesso negado" });
    }
    if (token !== process.env.JWT) {
        return res.status(403).json({ message: "Token inválido" });
    }
    next();
};
exports.authenticate = authenticate;
