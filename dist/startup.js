"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registrarestudante_usecase_1 = require("./src/application/usecases/registrarestudante.usecase");
const estudante_controller_1 = require("./src/infrastructure/controllers/estudante.controller");
const estudante_database_1 = require("./src/infrastructure/database/entities/estudante.database");
const server_1 = require("./src/infrastructure/server/server");
class Startup {
    static execute() {
        server_1.Server.initialize();
        Startup.inject();
    }
    static inject() {
        const instances = [];
        //injeção de dependência
        instances.push(new estudante_controller_1.EstudanteController(new registrarestudante_usecase_1.RegistrarEstudante(new estudante_database_1.DbEstudante())));
        server_1.Server.useRoute(instances);
    }
}
Startup.execute();
