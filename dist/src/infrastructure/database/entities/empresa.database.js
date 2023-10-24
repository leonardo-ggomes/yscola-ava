"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbEmpresa = void 0;
const db_database_1 = require("../db.database");
const db_mysql_1 = require("../mysql/db.mysql");
class DbEmpresa extends db_database_1.Db {
    constructor(connection) {
        super(new db_mysql_1.DbMySql(connection));
    }
    adicionar(empresa) {
        const sql = `
            INSERT INTO empresa (nome, logo, email, senha, saldo, quantidadeFuncionarios, folhaPagamento, salarioMinimoVigente)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `;
        return this.dbInsert(sql, [
            empresa.nome,
            empresa.logo,
            empresa.email,
            empresa.senha,
            empresa.saldo,
            empresa.quantidadeFuncionarios,
            empresa.folhaPagamento,
            empresa.salarioMinimoVigente
        ]);
    }
    obter() {
        return this.dbSelect("select * from empresa", []);
    }
    apagar(id) {
        return this.dbDelete("delete from empresa where id = ?", [id]);
    }
    atualizar(empresa) {
        return this.dbUpdate("update empresa set x = y", []);
    }
}
exports.DbEmpresa = DbEmpresa;
