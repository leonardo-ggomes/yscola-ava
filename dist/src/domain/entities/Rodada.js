"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rodada = void 0;
class Rodada {
    constructor(nome, dataExpiracao) {
        this._dataCriacao = new Date();
        this._expirado = false;
        this._nome = nome;
        this._dataExpiracao = dataExpiracao;
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
    get dataCriacao() {
        return this._dataCriacao;
    }
    get dataExpiracao() {
        return this._dataExpiracao;
    }
    set dataExpiracao(value) {
        this._dataExpiracao = value;
        this.rodadaExpirada(this._dataExpiracao);
    }
    get expirado() {
        return this._expirado;
    }
    set expirado(value) {
        this._expirado = value;
    }
    rodadaExpirada(data) {
        this._expirado = new Date() > this._dataExpiracao ? true : false;
    }
}
exports.Rodada = Rodada;
