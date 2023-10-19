"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = exports.PATH_KEY = void 0;
require("reflect-metadata");
exports.PATH_KEY = Symbol('path');
function route(path, method) {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata(exports.PATH_KEY, { path, method }, target, propertyKey);
    };
}
exports.route = route;
