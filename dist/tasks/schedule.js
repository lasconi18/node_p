"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
console.log("Iniciando agendamento da tarefa");
node_cron_1.default.schedule("* * * * *", () => {
    console.log("Executando tarefa");
});
