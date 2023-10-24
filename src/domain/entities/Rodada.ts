export class Rodada{
   
    private _id?: number;
    private _nome: string;
    private _dataCriacao: Date = new Date();
    private _expirado: boolean = false;   
    private _dataExpiracao: Date;


    constructor(nome: string, dataExpiracao: Date){
      this._nome = nome;
      this._dataExpiracao = dataExpiracao;
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

    get dataCriacao(){
        return this._dataCriacao;
    }

    get dataExpiracao(): Date {
        return this._dataExpiracao;
    }
    
    set dataExpiracao(value: Date) {
        this._dataExpiracao = value;
        this.rodadaExpirada(this._dataExpiracao)
    }

    public get expirado(): boolean {
        return this._expirado;
    }
    
    public set expirado(value: boolean) {
        this._expirado = value;
    }

    public rodadaExpirada(data: Date){
        this._expirado = new Date() > this._dataExpiracao ? true : false;
    }
}