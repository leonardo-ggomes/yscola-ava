"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = exports.PATH_KEY = void 0;
require("reflect-metadata");
exports.PATH_KEY = Symbol('path');
function route(path) {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata(exports.PATH_KEY, path, target, propertyKey);
    };
}
exports.route = route;
