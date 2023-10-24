import { Empresa } from "../../../domain/entities/Empresa";
import { EmpresaService } from "../../services/empresa.services";

export class DecisaoEmpresa{

    private readonly _empresaService: EmpresaService;

    constructor(empresaService: EmpresaService){
        this._empresaService = empresaService;
    }

    public execute(): Promise<Empresa> {
      return this._empresaService.obter()
    }

}