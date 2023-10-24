"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.EmpresaController = void 0;
const decorator_server_1 = require("../server/decorators/decorator.server");
const enum_server_1 = require("../server/enums/enum.server");
const salariominimo_bancocentral_1 = require("../../ExternalServices/BancoCentral/salariominimo.bancocentral");
class EmpresaController {
    constructor(registrarEmpresaUseCase) {
        this._registrarEmpresaUseCase = registrarEmpresaUseCase;
    }
    salarioBCAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield salariominimo_bancocentral_1.SalarioMinimoBC.salarioMinimo());
        });
    }
    cadastrarEmpresaAsync(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = {
                nome: req.body.nome,
                logo: req.body.logo,
                email: req.body.email,
                senha: req.body.senha,
                salarioMinimoVigente: yield salariominimo_bancocentral_1.SalarioMinimoBC.salarioMinimo()
            };
            res.json(yield this._registrarEmpresaUseCase.execute(input));
        });
    }
}
exports.EmpresaController = EmpresaController;
__decorate([
    (0, decorator_server_1.route)("/salariobc", enum_server_1.methods.GET)
], EmpresaController.prototype, "salarioBCAsync", null);
__decorate([
    (0, decorator_server_1.route)("/empresa/novocadastro", enum_server_1.methods.POST)
], EmpresaController.prototype, "cadastrarEmpresaAsync", null);
