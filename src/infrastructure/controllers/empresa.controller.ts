import { Request, Response } from "express";
import { route } from "../server/decorators/decorator.server";
import { methods } from "../server/enums/enum.server";
import { RegistrarEmpresa } from "../../application/usecases/gerenciarconta/registrarEmpresa.usecase";
import { IRegistrarEmpresaInput } from "../../application/usecases/gerenciarconta/registrarEmpresaInput.usecase";
import { SalarioMinimoBC } from "../../ExternalServices/BancoCentral/salariominimo.bancocentral";

export class EmpresaController {
  private readonly _registrarEmpresaUseCase: RegistrarEmpresa;

  constructor(registrarEmpresaUseCase: RegistrarEmpresa) {
    this._registrarEmpresaUseCase = registrarEmpresaUseCase;
  }

  
  @route("/salariobc", methods.GET)
  public async salarioBCAsync(req: Request, res: Response): Promise<void> { 
    res.json(await SalarioMinimoBC.salarioMinimo());
  }

  @route("/empresa/novocadastro", methods.POST)
  public async cadastrarEmpresaAsync(req: Request, res: Response): Promise<void> {    

    const input: IRegistrarEmpresaInput = {
        nome: req.body.nome,
        logo: req.body.logo, 
        email: req.body.email, 
        senha: req.body.senha,
        salarioMinimoVigente: await SalarioMinimoBC.salarioMinimo()
    }

    res.json(await this._registrarEmpresaUseCase.execute(input));
  }

 
}
