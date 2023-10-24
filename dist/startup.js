"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const server_1 = require("./src/infrastructure/server/server");
const estudante_controller_1 = require("./src/infrastructure/controllers/estudante.controller");
const registrarEstudante_usecase_1 = require("./src/application/usecases/gerenciarconta/registrarEstudante.usecase");
const estudante_services_1 = require("./src/application/services/estudante.services");
const estudante_database_1 = require("./src/infrastructure/database/entities/estudante.database");
class Startup {
    static execute() {
        server_1.Server.initialize();
        Startup.inject();
    }
    static inject() {
        const instances = [];
        //injeção de dependência
        instances.push(new estudante_controller_1.EstudanteController(new registrarEstudante_usecase_1.RegistrarEstudante(new estudante_services_1.EstudanteService(new estudante_database_1.DbEstudante(this.mysqlConnection)))));
        server_1.Server.useRoute(instances);
    }
}
Startup.mysqlConnection = mysql2_1.default.createConnection({ database: process.env.DATABASE, host: process.env.HOST, password: process.env.PASSWORD, user: process.env.USER });
Startup.execute();
