"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalarioMinimoBC = void 0;
class SalarioMinimoBC {
    static salarioMinimo() {
        return __awaiter(this, void 0, void 0, function* () {
            let salarioMinimo = 0;
            try {
                const response = yield fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.1619/dados?formato=json');
                const data = yield response.json();
                if (response.ok) {
                    salarioMinimo = data.slice(data.length - 1)[0].valor;
                }
            }
            catch (error) {
                console.error(error);
            }
            return salarioMinimo;
        });
    }
}
exports.SalarioMinimoBC = SalarioMinimoBC;
