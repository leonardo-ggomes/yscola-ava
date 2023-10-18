"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const Pessoa_1 = require("./Pessoa");
class Professor extends Pessoa_1.Pessoa {
    constructor(nome, sobrenome, email, senha, nif) {
        super(nome, sobrenome, email, senha);
        this._nif = nif;
    }
    get nif() {
        return this._nif;
    }
    set nif(value) {
        this._nif = value;
    }
}
exports.Professor = Professor;
