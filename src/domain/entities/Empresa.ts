import { Divida } from './Divida';
import { Produto } from './Produto';
import { Venda } from './Venda';

export class Empresa{

    private _id?: number;
    private _nome: string;
    private _logo: string;
    private _email: string;
    private _senha: string;
    private _saldo: number = 0;
    private _quantidadeFuncionarios: number = 0;
    private _folhaPagamento: number = 0;
    private _salarioMinimoVigente: number;
    private _dividas: Divida[] = [];
    private _vendas: Venda[] = [];
    private _produtos: Produto[] = [];   
       
    constructor(nome: string, logo: string, email: string, senha: string, salarioMinimoVigente: number){   
        this._nome = nome;
        this._logo = logo;
        this._email = email;
        this._senha = senha;
        this._salarioMinimoVigente = salarioMinimoVigente;
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
 
    get logo(){
        return this._logo;
    }

    set logo(value){
        this._logo = value;
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

    get saldo(): number {
        return this._saldo;
    }

    get dividas(): Divida[]{
        return this._dividas;
    }
    
    private set saldo(value: number) {
        this._saldo = value;
    }

    get quantidadeFuncionarios(): number {
        return this._quantidadeFuncionarios;
    }

    set quantidadeFuncionarios(value: number) {
        this._quantidadeFuncionarios = value;
        this.atualizarFolhaPagamento();
    }

    get folhaPagamento(): number {
        return this._folhaPagamento;
    }

    private set folhaPagamento(value: number) {
        this._folhaPagamento = value;
    }

    get salarioMinimoVigente(): number {
        return this._salarioMinimoVigente;
    }
    
    set salarioMinimoVigente(value: number) {
        this._salarioMinimoVigente = value;
        this.atualizarFolhaPagamento();
    }

    get vendas(): Venda[]{
        return this.vendas;
    }

    get produtos(): Produto[]{
        return this._produtos;
    }
   
    private atualizarFolhaPagamento(): void{
        this._folhaPagamento = this._salarioMinimoVigente * this._quantidadeFuncionarios;
    }

    public adicionarProduto(produto: Produto): void{
        this._produtos.push(produto);
    }

    public fazerConta(divida: Divida): void{
        this._dividas?.push(divida);
    }

    public novaVenda(venda: Venda): void{
        this._vendas?.push(venda);

        this._produtos?.forEach(produto =>  {

            if(produto.id == venda.produto.id){
                produto.quantideEstoque -= venda.quantidade;
                this.saldo += venda.produto.precoVenda * venda.quantidade;
            }

        });
    }
}