"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const estudante_services_1 = require("../../application/services/estudante.services");
const estudante_controller_1 = require("../controllers/estudante.controller");
const estudante_database_1 = require("../database/entities/estudante.database");
class Server {
    static initialize() {
        Server.app = (0, express_1.default)();
        const dbEstudante = new estudante_database_1.DbEstudante();
        Server._estudanteController = new estudante_controller_1.EstudanteController(new estudante_services_1.EstudanteService(dbEstudante));
        Server.middleware();
        Server.route();
        Server.listen();
    }
    static listen(port = 3000) {
        Server.app.listen(port, () => console.log(`Online Server on port ${port}`));
    }
    static middleware() {
        Server.app.use(express_1.default.json());
    }
    static route() {
        Server.app.get('/', Server._estudanteController.index.bind(Server._estudanteController));
    }
}
exports.Server = Server;
