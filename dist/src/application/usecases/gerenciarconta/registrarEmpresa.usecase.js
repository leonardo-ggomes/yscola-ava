"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarEmpresa = void 0;
const Empresa_1 = require("../../../domain/entities/Empresa");
class RegistrarEmpresa {
    constructor(empresaService) {
        this._empresaService = empresaService;
    }
    execute(input) {
        const empresa = new Empresa_1.Empresa(input.nome, input.logo, input.email, input.senha, input.salarioMinimoVigente);
        return this._empresaService.adicionar(empresa);
    }
}
exports.RegistrarEmpresa = RegistrarEmpresa;
