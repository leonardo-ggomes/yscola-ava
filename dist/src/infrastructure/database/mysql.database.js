"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
class MySql {
    constructor() {
        this._mysql = mysql2_1.default.createPool({
            database: 'dbava',
            host: '127.0.0.1',
            password: '',
            user: 'root'
        }).promise();
    }
    insert(obj) {
        return new Promise(r => r);
    }
    select() {
        return new Promise(r => r);
    }
    delete(id) {
        return new Promise(r => r);
    }
    update(obj) {
        return new Promise(r => r);
    }
}
