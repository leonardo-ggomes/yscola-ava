"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
class ProdutoService {
    constructor(produtoService) {
        this._produtoRepository = produtoService;
    }
    adicionar(produto) {
        return this._produtoRepository.adicionar(produto);
    }
    obter() {
        return this._produtoRepository.obter();
    }
    apagar(id) {
        return this._produtoRepository.apagar(id);
    }
    atualizar(produto) {
        return this._produtoRepository.atualizar(produto);
    }
}
exports.ProdutoService = ProdutoService;
