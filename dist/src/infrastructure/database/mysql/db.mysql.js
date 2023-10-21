"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbMySql = void 0;
const dotenv = __importStar(require("dotenv"));
const mysql2_1 = __importDefault(require("mysql2"));
const messages_utils_1 = require("../../../utils/messages.utils");
dotenv.config();
class DbMySql {
    constructor() {
        this.connection = mysql2_1.default.createConnection({ database: process.env.DATABASE, host: process.env.HOST, password: process.env.PASSWORD, user: process.env.USER });
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
