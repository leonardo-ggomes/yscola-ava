export class Produto{
   
    private _id?: number;
    private _nome: string;
    private _precoVenda: number;    
    private _precoCompra: number;
    private _quantideEstoque: number;
    private _empresaId: number;
     
    constructor(nome: string, precoVenda: number, precoCompra: number, quantidadeEstoque: number, empresaId: number){
      this._nome = nome;
      this._precoVenda = precoVenda;
      this._precoCompra = precoCompra;
      this._quantideEstoque = quantidadeEstoque;
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

    get precoVenda(): number {
        return this._precoVenda;
    }

    set precoVenda(value: number) {
        this._precoVenda = value;
    }
   
    get precoCompra(): number {
        return this._precoCompra;
    }

    set precoCompra(value: number) {
        this._precoCompra = value;
    }

    get quantideEstoque(): number {
        return this._quantideEstoque;
    }
    
    set quantideEstoque(value: number) {
        this._quantideEstoque = value;
    }

    get empresaId(): number {
        return this._empresaId;
    }

    set empresaId(value: number) {
        this._empresaId = value;
    }
}