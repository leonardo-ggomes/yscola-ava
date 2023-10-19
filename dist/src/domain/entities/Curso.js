"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    constructor(nome, dtinicio, dttermino) {
        this._nome = nome;
        this._dtinicio = dtinicio;
        this._dttermino = dttermino;
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
    get dtinicio() {
        return this._dtinicio;
    }
    set dtinicio(value) {
        this._dtinicio = value;
    }
    get dttermino() {
        return this._dttermino;
    }
    set dttermino(value) {
        this._dttermino = value;
    }
}
exports.Curso = Curso;
