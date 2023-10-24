import { Empresa } from "../../../domain/entities/Empresa";
import { Email } from "../../../domain/value-objects/Email";
import { IEmpresaRepository } from "../../../repository/entities/empresa.repository"
import { EmpresaService } from "../../services/empresa.services";
import { IRegistrarEmpresaInput } from "./registrarEmpresaInput.usecase";

export class RegistrarEmpresa{

    private readonly _empresaService: EmpresaService;

    constructor(empresaService: EmpresaService){
        this._empresaService = empresaService;
    }

    public execute(input: IRegistrarEmpresaInput): Promise<number> {

        const empresa: Empresa = new Empresa(
            input.nome,
            input.logo,
            input.email,
            input.senha,
            input.salarioMinimoVigente
        )

       return this._empresaService.adicionar(empresa)
    }

}