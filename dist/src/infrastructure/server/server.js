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
    constructor() {
        this.server = (0, express_1.default)();
        const dbEstudante = new estudante_database_1.DbEstudante();
        this._estudanteController = new estudante_controller_1.EstudanteController(new estudante_services_1.EstudanteService(dbEstudante));
        this.middleware();
        this.route();
    }
    listen(port = 3000) {
        this.server.listen(port, () => console.log(`Online Server on port ${port}`));
    }
    middleware() {
        this.server.use(express_1.default.json());
    }
    route() {
        this.server.get('/', this._estudanteController.index.bind(this._estudanteController));
    }
}
exports.Server = Server;
