"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudanteService = void 0;
class EstudanteService {
    constructor(estudanteService) {
        this._estudanteService = estudanteService;
    }
    adicionar(estudante) {
        return this._estudanteService.adicionar(estudante);
    }
    obter() {
        return this._estudanteService.obter();
    }
    apagar(id) {
        return this._estudanteService.apagar(id);
    }
    atualizar(estudante) {
        return this._estudanteService.atualizar(estudante);
    }
}
exports.EstudanteService = EstudanteService;
