"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db = (0, knex_1.default)({
    client: 'mysql2',
    connection: {
        host: process.env.db_host,
        user: process.env.db_user,
        password: process.env.db_password,
        database: process.env.db_database,
    },
    pool: {
        min: 2,
        max: 10
    }
});
