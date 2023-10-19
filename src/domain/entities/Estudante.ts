import { Email } from '../value-objects/Email'
import { Pessoa } from './Pessoa';

export class Estudante extends Pessoa{
   
    private _carteirinha: string;

    constructor(nome: string, sobrenome: string, email: Email, senha: string, carteirinha: string){
       super(nome, sobrenome, email, senha)
       this._carteirinha = carteirinha;
    }

    get carteirinha(){
        return this._carteirinha;
    }

    set carteirinha(value){
        this._carteirinha = value;
    }

}