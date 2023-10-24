import { Email } from '../value-objects/Email'
import { Pessoa } from './Pessoa';

export class Professor extends Pessoa{
   
    private _nif: number;

    constructor(nome: string, sobrenome: string, email: string, senha: string, nif: number){
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