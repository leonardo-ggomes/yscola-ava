"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, precoVenda, precoCompra, quantidadeEstoque, empresaId) {
        this._nome = nome;
        this._precoVenda = precoVenda;
        this._precoCompra = precoCompra;
        this._quantideEstoque = quantidadeEstoque;
        this._empresaId = empresaId;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get precoVenda() {
        return this._precoVenda;
    }
    set precoVenda(value) {
        this._precoVenda = value;
    }
    get precoCompra() {
        return this._precoCompra;
    }
    set precoCompra(value) {
        this._precoCompra = value;
    }
    get quantideEstoque() {
        return this._quantideEstoque;
    }
    set quantideEstoque(value) {
        this._quantideEstoque = value;
    }
    get empresaId() {
        return this._empresaId;
    }
    set empresaId(value) {
        this._empresaId = value;
    }
}
exports.Produto = Produto;
