"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const database_1 = require("../config/database");
let users = [];
let idCounter = 1;
exports.userService = {
    findAll: async () => {
        return (0, database_1.db)('users').select("*");
    },
    findById: async (id) => {
        return (0, database_1.db)('users').where({ id }).first();
    },
    create: async (name, email) => {
        try {
            const [id] = await (0, database_1.db)("users").insert({ name, email });
            return await (0, database_1.db)('users').where({ id }).first();
        }
        catch (error) {
            if (error.code == "ER_DUMO_ENTRY") {
                throw new Error("Usuário já existente");
            }
            throw new Error("Erro ao criar usuário");
        }
    },
    update: async (id, name, email) => {
        const updated = await (0, database_1.db)('users').where({ id }).update({ name, email });
        return updated ? await (0, database_1.db)('users').where({ id }).first() : null;
    },
    delete: async (id) => {
        const deleted = await (0, database_1.db)('users').where({ id }).delete();
        return deleted > 0;
    }
};
