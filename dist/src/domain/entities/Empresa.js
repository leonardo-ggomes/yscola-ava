"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome, logo, email, senha, salarioMinimoVigente) {
        this._saldo = 0;
        this._quantidadeFuncionarios = 0;
        this._folhaPagamento = 0;
        this._dividas = [];
        this._vendas = [];
        this._produtos = [];
        this._nome = nome;
        this._logo = logo;
        this._email = email;
        this._senha = senha;
        this._salarioMinimoVigente = salarioMinimoVigente;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get logo() {
        return this._logo;
    }
    set logo(value) {
        this._logo = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get senha() {
        return this._senha;
    }
    set senha(value) {
        this._senha = value;
    }
    get saldo() {
        return this._saldo;
    }
    get dividas() {
        return this._dividas;
    }
    set saldo(value) {
        this._saldo = value;
    }
    get quantidadeFuncionarios() {
        return this._quantidadeFuncionarios;
    }
    set quantidadeFuncionarios(value) {
        this._quantidadeFuncionarios = value;
        this.atualizarFolhaPagamento();
    }
    get folhaPagamento() {
        return this._folhaPagamento;
    }
    set folhaPagamento(value) {
        this._folhaPagamento = value;
    }
    get salarioMinimoVigente() {
        return this._salarioMinimoVigente;
    }
    set salarioMinimoVigente(value) {
        this._salarioMinimoVigente = value;
        this.atualizarFolhaPagamento();
    }
    get vendas() {
        return this.vendas;
    }
    get produtos() {
        return this._produtos;
    }
    atualizarFolhaPagamento() {
        this._folhaPagamento = this._salarioMinimoVigente * this._quantidadeFuncionarios;
    }
    adicionarProduto(produto) {
        this._produtos.push(produto);
    }
    fazerConta(divida) {
        var _a;
        (_a = this._dividas) === null || _a === void 0 ? void 0 : _a.push(divida);
    }
    novaVenda(venda) {
        var _a, _b;
        (_a = this._vendas) === null || _a === void 0 ? void 0 : _a.push(venda);
        (_b = this._produtos) === null || _b === void 0 ? void 0 : _b.forEach(produto => {
            if (produto.id == venda.produto.id) {
                produto.quantideEstoque -= venda.quantidade;
                this.saldo += venda.produto.precoVenda * venda.quantidade;
            }
        });
    }
}
exports.Empresa = Empresa;
