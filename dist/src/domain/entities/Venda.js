"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
class Venda {
    constructor(produto, rodada, quantidade, empresaId) {
        this._produto = produto;
        this._rodada = rodada;
        this._quantidade = quantidade;
        this._empresaId = empresaId;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get produto() {
        return this._produto;
    }
    set produto(value) {
        this._produto = value;
    }
    get rodada() {
        return this._rodada;
    }
    set rodada(value) {
        this._rodada = value;
    }
    get quantidade() {
        return this._quantidade;
    }
    set quantidade(value) {
        this._quantidade = value;
    }
    get empresaId() {
        return this._empresaId;
    }
    set empresaId(value) {
        this._empresaId = value;
    }
}
exports.Venda = Venda;
