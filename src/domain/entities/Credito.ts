import { Empresa } from "./Empresa";

export class Credito{
   
    private _id?: number;
    private _nome: string;
    private _limite: number = 0;    
    private _parcelasLiberadas: number = 0;    
     
    constructor(nome: string, empresa: Empresa){
      this._nome = nome;
      this.processarLiberacao(empresa);
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

    get limite(): number {
        return this._limite;
    }

    private set limite(value: number) {
        this._limite = value;
    }

    get parcelasLiberadas(): number {
        return this._parcelasLiberadas;
    }

    private set parcelasLiberadas(value: number) {
        this._parcelasLiberadas = value;
    }

    private processarLiberacao(empresa: Empresa): void{
        if(empresa.dividas.filter(divida => divida.quitado == true).length > 0){
            this._limite = 0;
            this._parcelasLiberadas = 0
        }
        else{
            
        }
    }
    

}