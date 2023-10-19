import { Curso } from "./Curso";
import { Estudante } from "./Estudante";
import { Professor } from "./Professor";

export class Turma {
  private _id?: number;
  private _nome: string;
  private _descricao: string;
  private _professores: Array<Professor>;
  private _estudantes?: Array<Estudante>;
  private _curso: Curso;

  constructor(nome: string, descricao: string, professores: Array<Professor>, curso: Curso) {
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

  get curso(){
    return this._curso;
  }

  set curso(value){
    this._curso = value;
  }

  public matricularEstudante(estudante: Estudante): void {
    this._estudantes?.push(estudante);
  }
}
