"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
exports.userController = {
    getAll: async (req, res, next) => {
        try {
            let data = await user_service_1.userService.findAll();
            res.json(data);
        }
        catch (error) {
            next(error);
        }
    },
    getById: async (req, res, next) => {
        try {
            const user = await user_service_1.userService.findById(Number(req.params.id));
            user ? res.json(user) : res.status(404).json({ message: "Usuário  não encontrado" });
        }
        catch (error) {
            next(error);
        }
    },
    create: async (req, res, next) => {
        try {
            const { name, email } = req.body;
            const user = await user_service_1.userService.create(name, email);
            res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const { name, email } = req.body;
            const user = await user_service_1.userService.update(Number(req.params.id), name, email);
            user ? res.json(user) : res.status(404).json({ message: "Usuário  não encontrado" });
        }
        catch (error) {
            next(error);
        }
    },
    delete: async (req, res, next) => {
        try {
            const success = await user_service_1.userService.delete(Number(req.params.id));
            success ? res.json({ message: "Usuário deletado com sucesso" }) : res.status(404).json({ message: "Usuário  não encontrado" });
        }
        catch (error) {
            next(error);
        }
    }
};
