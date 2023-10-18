import { Email } from '../value-objects/Email';
import { errors } from '../../utils/messages.utils';

export class Pessoa{

    private _nome: String;
    private _sobrenome: String;
    private _email: Email;
    private _senha: String;

    constructor(nome: String, sobrenome: String, email: Email, senha: string){

        if(this.constructor == Pessoa){
            throw Error(errors.abstract)
        }

        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._senha = senha;
    }

    get nome(){
        return this._nome;
    }

    set nome(value){
        this._nome = value;
    }
 
    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(value){
        this._sobrenome = value;
    }
 
    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }
 
    get senha(){
        return this._senha;
    }

    set senha(value){
        this._senha = value;
    } 
 

}