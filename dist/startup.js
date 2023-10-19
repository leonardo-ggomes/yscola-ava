"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/infrastructure/server/server");
class Startup {
    static execute() {
        server_1.Server.initialize();
    }
    static useRouter() {
    }
}
Startup.execute();
