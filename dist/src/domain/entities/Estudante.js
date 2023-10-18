"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
const Pessoa_1 = require("./Pessoa");
class Estudante extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, email, senha, carteirinha) {
        super(nome, sobrenome, email, senha);
        this._carteirinha = carteirinha;
    }
    get carteirinha() {
        return this._carteirinha;
    }
    set carteirinha(value) {
        this._carteirinha = value;
    }
}
exports.Estudante = Estudante;
