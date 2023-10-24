"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
const messages_utils_1 = require("../../utils/messages.utils");
class Db {
    constructor(connection) {
        if (this.constructor == (Db)) {
            throw Error(messages_utils_1.errors.abstract);
        }
        this._connection = connection;
    }
    dbInsert(cmd, params) {
        return this._connection.dbInsert(cmd, params);
    }
    dbSelect(cmd, params) {
        return this._connection.dbSelect(cmd, params);
    }
    dbDelete(cmd, params) {
        return this._connection.dbDelete(cmd, params);
    }
    dbUpdate(cmd, params) {
        return this._connection.dbUpdate(cmd, params);
    }
    dbConnect() {
        this._connection.dbConnect();
    }
    dbClose() {
        this._connection.dbClose();
    }
}
exports.Db = Db;
