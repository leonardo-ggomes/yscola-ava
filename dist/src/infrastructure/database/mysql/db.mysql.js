"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbMySql = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const messages_utils_1 = require("../../../utils/messages.utils");
class DbMySql {
    constructor() {
        this.connection = mysql2_1.default.createConnection({ database: 'dbava', host: '127.0.0.1', password: '', user: 'root' });
    }
    dbInsert(sql, obj) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, obj, (err, results) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
    dbSelect(sql) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
    dbDelete(sql, id) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, id, (err, results) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
    dbUpdate(sql, obj) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, obj, (err, results) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
    dbConnect() {
        this.connection.connect((err) => {
            if (err) {
                console.error(messages_utils_1.errors.dbconnection, err);
            }
            else {
                console.log(messages_utils_1.success.dbconnection);
            }
        });
    }
    dbClose() {
        this.connection.end((err) => {
            if (err) {
                console.error(messages_utils_1.errors.dbconnection, err);
            }
            else {
                console.log(messages_utils_1.success.dbconnection);
            }
        });
    }
}
exports.DbMySql = DbMySql;
