"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaService = void 0;
const Produto_1 = require("../../domain/entities/Produto");
class EmpresaService {
    constructor(empresaService, produtoService) {
        this._empresaRepository = empresaService;
        this._produtoService = produtoService;
    }
    adicionar(empresa) {
        return __awaiter(this, void 0, void 0, function* () {
            empresa.id = yield this._empresaRepository.adicionar(empresa);
            const produtoA = new Produto_1.Produto("Produto A", 200, 100, 500, empresa.id);
            const produtoB = new Produto_1.Produto("Produto B", 100, 50, 2500, empresa.id);
            const produtoC = new Produto_1.Produto("Produto C", 10, 5, 5000, empresa.id);
            empresa.adicionarProduto(produtoA);
            empresa.adicionarProduto(produtoB);
            empresa.adicionarProduto(produtoC);
            empresa.produtos.forEach((produto) => __awaiter(this, void 0, void 0, function* () { return yield this._produtoService.adicionar(produto); }));
            return empresa.id;
        });
    }
    obter() {
        return this._empresaRepository.obter();
    }
    apagar(id) {
        return this._empresaRepository.apagar(id);
    }
    atualizar(empresa) {
        return this._empresaRepository.atualizar(empresa);
    }
}
exports.EmpresaService = EmpresaService;
