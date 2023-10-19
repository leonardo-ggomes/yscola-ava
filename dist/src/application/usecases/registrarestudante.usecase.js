"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarEstudante = void 0;
class RegistrarEstudante {
    constructor(estudanteService) {
        this._estudanteService = estudanteService;
    }
    execute() {
        return this._estudanteService.obter();
    }
}
exports.RegistrarEstudante = RegistrarEstudante;
