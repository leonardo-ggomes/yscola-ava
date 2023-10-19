"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDef_1 = require("./swaggerDef");
const options = {
    swaggerDefinition: swaggerDef_1.options,
    apis: ['./dist/src/infrastructure/controllers/*.js'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
