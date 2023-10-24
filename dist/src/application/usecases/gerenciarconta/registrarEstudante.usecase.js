"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarEstudante = void 0;
const Estudante_1 = require("../../../domain/entities/Estudante");
class RegistrarEstudante {
    constructor(estudanteService) {
        this._estudanteService = estudanteService;
    }
    execute(input) {
        const estudante = new Estudante_1.Estudante("Leonardo", "G", "email@email.com", "senha123", 1006);
        return this._estudanteService.adicionar(estudante);
    }
}
exports.RegistrarEstudante = RegistrarEstudante;
