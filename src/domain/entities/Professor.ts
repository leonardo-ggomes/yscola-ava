import { Email } from '../value-objects/Email'
import { Pessoa } from './Pessoa';

export class Professor extends Pessoa{
   
    private _nif: Number;

    constructor(nome: String, sobrenome: String, email: Email, senha: string, nif: Number){
       super(nome, sobrenome, email, senha)
       this._nif = nif;
    }

    get nif(){
        return this._nif;
    }

    set nif(value){
        this._nif = value;
    }

}