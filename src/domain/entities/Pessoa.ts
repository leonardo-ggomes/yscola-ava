import { Email } from '../value-objects/Email';
import { errors } from '../../utils/messages.utils';

export class Pessoa{

    private _id?: number;
    private _nome: string;
    private _sobrenome: string;
    private _email: Email;
    private _senha: string;

    constructor(nome: string, sobrenome: string, email: Email, senha: string){

        if(this.constructor == Pessoa){
            throw Error(errors.abstract)
        }

        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._senha = senha;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
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