"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const decorator_server_1 = require("./decorators/decorator.server");
class Server {
    // private static _estudanteController: EstudanteController;
    static initialize() {
        Server.app = (0, express_1.default)();
        // const dbEstudante: DbEstudante = new DbEstudante();
        // Server._estudanteController = new EstudanteController(
        //     new EstudanteService(dbEstudante)
        // );
        Server.middleware();
        // Server.route();
        Server.listen();
    }
    static listen(port = 3000) {
        Server.app.listen(port, () => console.log(`Online Server on port ${port}`));
    }
    static middleware() {
        Server.app.use(express_1.default.json());
    }
    // private static route(){
    //     Server.app.get('/', Server._estudanteController.index.bind(Server._estudanteController));
    // }
    static useRoute(instances) {
        instances.forEach(instance => {
            for (const methodName of Object.getOwnPropertyNames(Object.getPrototypeOf(instance))) {
                const path = Reflect.getMetadata(decorator_server_1.PATH_KEY, instance, methodName);
                if (path) {
                    Server.app.get(path, instance[methodName].bind(instance));
                }
            }
        });
    }
}
exports.Server = Server;
