"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(email) {
        this.email = email;
        if (!this.email.match(/^[\w\.-]+@[\w\.-]+\.\w+$/)) {
            throw Error("Input isn't a valid format.");
        }
    }
}
exports.Email = Email;
