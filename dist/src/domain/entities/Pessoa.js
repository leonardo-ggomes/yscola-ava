"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
const messages_utils_1 = require("../../utils/messages.utils");
class Pessoa {
    constructor(nome, sobrenome, email, senha) {
        if (this.constructor == Pessoa) {
            throw Error(messages_utils_1.errors.abstract);
        }
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._senha = senha;
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
    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(value) {
        this._sobrenome = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get senha() {
        return this._senha;
    }
    set senha(value) {
        this._senha = value;
    }
}
exports.Pessoa = Pessoa;
