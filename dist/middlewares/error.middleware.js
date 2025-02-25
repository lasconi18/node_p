"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddlware = errorMiddlware;
function errorMiddlware(err, req, res, next) {
    res.status(500).json({ message: err.message || "Erro interno no servidor" });
}
