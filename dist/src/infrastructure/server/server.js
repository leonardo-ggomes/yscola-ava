"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = require("express");
class Server {
    constructor() {
        this.server = express_1.application;
    }
    listen(port = 3000) {
        this.server.listen(port, () => console.log(`Online Server on port ${port}`));
    }
}
exports.Server = Server;
