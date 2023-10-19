"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = void 0;
class Turma {
    constructor(nome, descricao, professores, curso) {
        this._nome = nome;
        this._descricao = descricao;
        this._professores = professores;
        this._curso = curso;
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
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
    get curso() {
        return this._curso;
    }
    set curso(value) {
        this._curso = value;
    }
    matricularEstudante(estudante) {
        var _a;
        (_a = this._estudantes) === null || _a === void 0 ? void 0 : _a.push(estudante);
    }
}
exports.Turma = Turma;
