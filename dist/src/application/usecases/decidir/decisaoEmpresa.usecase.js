"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisaoEmpresa = void 0;
class DecisaoEmpresa {
    constructor(empresaService) {
        this._empresaService = empresaService;
    }
    execute() {
        return this._empresaService.obter();
    }
}
exports.DecisaoEmpresa = DecisaoEmpresa;
