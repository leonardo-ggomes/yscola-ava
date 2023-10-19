"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbEstudante = void 0;
const db_database_1 = require("../db.database");
const db_mysql_1 = require("../mysql/db.mysql");
class DbEstudante extends db_database_1.Db {
    constructor() {
        super(new db_mysql_1.DbMySql());
        this._connection.dbConnect();
    }
    adicionar(estudante) {
        return this.dbInsert("insert into estudantes values()", estudante);
    }
    obter() {
        return this.dbSelect("select * from estudantes");
    }
    apagar(id) {
        return this.dbDelete("delete from estudantes where id = ?", id);
    }
    atualizar(estudante) {
        return this.dbUpdate("update estudante set x = y", estudante);
    }
}
exports.DbEstudante = DbEstudante;
