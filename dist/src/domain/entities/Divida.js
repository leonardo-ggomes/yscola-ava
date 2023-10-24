"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divida = void 0;
class Divida {
    constructor(nome, totalParcelas, parcelasAberto, valor, empresaId) {
        this._nome = nome;
        this._totalParcelas = totalParcelas;
        this._parcelasAberto = parcelasAberto;
        this._quitado = this.parcelasAberto != 0 ? false : true;
        this._valor = valor;
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
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    get quitado() {
        return this._quitado;
    }
    set quitado(value) {
        this._quitado = value;
    }
    get totalParcelas() {
        return this._totalParcelas;
    }
    set totalParcelas(value) {
        this._totalParcelas = value;
    }
    get parcelasAberto() {
        return this._parcelasAberto;
    }
    set parcelasAberto(value) {
        this._parcelasAberto = value;
    }
    get empresaId() {
        return this._empresaId;
    }
    set empresaId(value) {
        this._empresaId = value;
    }
}
exports.Divida = Divida;
