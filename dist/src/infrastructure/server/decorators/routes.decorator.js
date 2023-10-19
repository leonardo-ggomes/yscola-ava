"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const express_1 = require("express");
class Route {
    static rota(path) {
        return function (target, key) {
            Route.router.get(path, target);
        };
    }
}
exports.Route = Route;
Route.router = (0, express_1.Router)();
