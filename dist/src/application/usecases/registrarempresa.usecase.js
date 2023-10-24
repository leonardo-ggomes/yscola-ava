"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarEmpresa = void 0;
class RegistrarEmpresa {
    constructor(estudanteService) {
        this._empresaService = estudanteService;
    }
    execute() {
        return this._empresaService.obter();
    }
}
exports.RegistrarEmpresa = RegistrarEmpresa;
