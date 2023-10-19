"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const decorator_server_1 = require("./decorators/decorator.server");
const enum_server_1 = require("./enums/enum.server");
const messages_utils_1 = require("../../utils/messages.utils");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("../../../swagger-jsdoc"));
class Server {
    static initialize() {
        Server.app = (0, express_1.default)();
        Server.middleware();
        Server.listen();
        Server.useDoc();
    }
    static listen(port = 3000) {
        Server.app.listen(port, () => console.log(`Online Server on port ${port}`));
    }
    static middleware() {
        Server.app.use(express_1.default.json());
    }
    static useDoc() {
        Server.app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_jsdoc_1.default));
    }
    static useRoute(instances) {
        instances.forEach(instance => {
            for (const methodName of Object.getOwnPropertyNames(Object.getPrototypeOf(instance))) {
                const metadata = Reflect.getMetadata(decorator_server_1.PATH_KEY, instance, methodName);
                if (metadata) {
                    switch (metadata.method) {
                        case enum_server_1.methods.GET:
                            Server.app.get(metadata.path, instance[methodName].bind(instance));
                            break;
                        case enum_server_1.methods.POST:
                            Server.app.post(metadata.path, instance[methodName].bind(instance));
                            break;
                        case enum_server_1.methods.PUT:
                            Server.app.put(metadata.path, instance[methodName].bind(instance));
                            break;
                        case enum_server_1.methods.DELETE:
                            Server.app.delete(metadata.path, instance[methodName].bind(instance));
                            break;
                        default: console.info(messages_utils_1.info.notRouter);
                    }
                }
            }
        });
    }
}
exports.Server = Server;
