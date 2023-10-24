import { Produto } from "./Produto";
import { Rodada } from "./Rodada";

export class Venda{
   
    private _id?: number;
    private _produto: Produto;   
    private _rodada: Rodada;
    private _quantidade: number;
    private _empresaId: number;

    constructor(produto: Produto, rodada: Rodada, quantidade: number, empresaId: number){
      this._produto = produto;
      this._rodada = rodada;
      this._quantidade = quantidade;
      this._empresaId = empresaId;
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }

    get produto(): Produto {
        return this._produto;
    }
    
    set produto(value: Produto) {
        this._produto = value;
    }

    get rodada(): Rodada {
        return this._rodada;
    }
    
    set rodada(value: Rodada) {
        this._rodada = value;
    }  

    get quantidade(): number {
        return this._quantidade;
    }
    
    set quantidade(value: number) {
        this._quantidade = value;
    }

    get empresaId(): number {
        return this._empresaId;
    }

    set empresaId(value: number) {
        this._empresaId = value;
    }
 
}