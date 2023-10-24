"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbEstudante = void 0;
const db_database_1 = require("../db.database");
const db_mysql_1 = require("../mysql/db.mysql");
class DbEstudante extends db_database_1.Db {
    constructor(connection) {
        super(new db_mysql_1.DbMySql(connection));
    }
    adicionar(estudante) {
        const sql = `
            INSERT INTO estudantes (nome, sobrenome, email, senha, carteirinha)
            VALUES (?, ?, ?, ?, ?);
        `;
        return this.dbInsert(sql, [
            estudante.nome,
            estudante.sobrenome,
            estudante.email,
            estudante.senha,
            estudante.carteirinha
        ]);
    }
    obter() {
        return this.dbSelect("select * from estudantes", []);
    }
    apagar(id) {
        return this.dbDelete("delete from estudantes where id = ?", [id]);
    }
    atualizar(estudante) {
        return this.dbUpdate("update estudantes set id = ?", [estudante.id]);
    }
}
exports.DbEstudante = DbEstudante;
