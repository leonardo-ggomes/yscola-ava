export class Divida{
   
    private _id?: number;
    private _nome: string;
    private _quitado: boolean;   
    private _totalParcelas: number;
    private _parcelasAberto: number;
    private _valor: number;
    private _empresaId: number;

 
    constructor(nome: string, totalParcelas: number, parcelasAberto: number, valor: number, empresaId: number){
      this._nome = nome;
      this._totalParcelas = totalParcelas;
      this._parcelasAberto = parcelasAberto;
      this._quitado = this.parcelasAberto != 0 ? false : true;
      this._valor = valor;
      this._empresaId = empresaId;
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

    
    get valor(){
        return this._valor;
    }

    set valor(value){
        this._valor = value;
    }


    get quitado(): boolean {
        return this._quitado;
    }
    
    set quitado(value: boolean) {
        this._quitado = value;
    }

    get totalParcelas(): number {
        return this._totalParcelas;
    }
    
    set totalParcelas(value: number) {
        this._totalParcelas = value;
    }

    get parcelasAberto(): number {
        return this._parcelasAberto;
    }
    
    set parcelasAberto(value: number) {
        this._parcelasAberto = value;
    }

    get empresaId(): number {
        return this._empresaId;
    }

    set empresaId(value: number) {
        this._empresaId = value;
    }

}