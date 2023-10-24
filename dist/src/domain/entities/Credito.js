"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
class Credito {
    constructor(nome, empresa) {
        this._limite = 0;
        this._parcelasLiberadas = 0;
        this._nome = nome;
        this.processarLiberacao(empresa);
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
    get limite() {
        return this._limite;
    }
    set limite(value) {
        this._limite = value;
    }
    get parcelasLiberadas() {
        return this._parcelasLiberadas;
    }
    set parcelasLiberadas(value) {
        this._parcelasLiberadas = value;
    }
    processarLiberacao(empresa) {
        if (empresa.dividas.filter(divida => divida.quitado == true).length > 0) {
            this._limite = 0;
            this._parcelasLiberadas = 0;
        }
        else {
        }
    }
}
exports.Credito = Credito;
