"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbProduto = void 0;
const db_database_1 = require("../db.database");
const db_mysql_1 = require("../mysql/db.mysql");
class DbProduto extends db_database_1.Db {
    constructor(connection) {
        super(new db_mysql_1.DbMySql(connection));
    }
    adicionar(produto) {
        const sql = `
            INSERT INTO produtos (nome, precoVenda, precoCompra, quantidadeEstoque, empresaId)
            VALUES
                (?, ?, ?, ?, ?);        
        `;
        return this.dbInsert(sql, [
            produto.nome,
            produto.precoVenda,
            produto.precoCompra,
            produto.quantideEstoque,
            produto.empresaId
        ]);
    }
    obter() {
        return this.dbSelect("select * from produtos", []);
    }
    apagar(id) {
        return this.dbDelete("delete from produtos where id = ?", [id]);
    }
    atualizar(produto) {
        return this.dbUpdate("update produtos set x = y", []);
    }
}
exports.DbProduto = DbProduto;
