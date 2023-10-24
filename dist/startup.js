"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const empresa_services_1 = require("./src/application/services/empresa.services");
const produto_services_1 = require("./src/application/services/produto.services");
const registrarEmpresa_usecase_1 = require("./src/application/usecases/gerenciarconta/registrarEmpresa.usecase");
const empresa_controller_1 = require("./src/infrastructure/controllers/empresa.controller");
const empresa_database_1 = require("./src/infrastructure/database/entities/empresa.database");
const produto_database_1 = require("./src/infrastructure/database/entities/produto.database");
const server_1 = require("./src/infrastructure/server/server");
class Startup {
    static execute() {
        server_1.Server.initialize();
        Startup.inject();
    }
    static inject() {
        const instances = [];
        //injeção de dependência
        instances.push(new empresa_controller_1.EmpresaController(new registrarEmpresa_usecase_1.RegistrarEmpresa(new empresa_services_1.EmpresaService(new empresa_database_1.DbEmpresa(this.mysqlConnection), new produto_services_1.ProdutoService(new produto_database_1.DbProduto(this.mysqlConnection))))));
        server_1.Server.useRoute(instances);
    }
}
Startup.mysqlConnection = mysql2_1.default.createConnection({ database: process.env.DATABASE, host: process.env.HOST, password: process.env.PASSWORD, user: process.env.USER });
Startup.execute();
