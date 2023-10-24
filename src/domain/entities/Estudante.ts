import { Pessoa } from './Pessoa';

export class Estudante extends Pessoa{
   
    private _carteirinha: number;

    constructor(nome: string, sobrenome: string, email: string, senha: string, carteirinha: number){
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