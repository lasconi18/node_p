"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bull_1 = __importDefault(require("bull"));
const email_service_1 = require("../services/email.service");
const emailQueue = new bull_1.default("emailQueue", {
    redis: { host: "127.0.0.1", port: 6379 }
});
emailQueue.process(async (job) => {
    console.log("Enviando email");
    await (0, email_service_1.enviaEmail)();
    console.log("Email enviado");
});
