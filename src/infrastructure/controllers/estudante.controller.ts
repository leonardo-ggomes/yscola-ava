import { Request, Response } from "express";
import { route } from "../server/decorators/decorator.server";
import { methods } from "../server/enums/enum.server";
import { RegistrarEstudante } from "../../application/usecases/gerenciarconta/registrarEstudante.usecase";
import { IRegistrarEstudante } from "../../application/usecases/gerenciarconta/registrarEstudanteInput.usecase";

export class EstudanteController {
  private readonly _registrarEstudanteUseCase: RegistrarEstudante;

  constructor(registrarEstudanteUseCase: RegistrarEstudante) {
    this._registrarEstudanteUseCase = registrarEstudanteUseCase;
  }

  @route("/estudante/novo", methods.POST)
  public async registrarAsync(req: Request, res: Response): Promise<void> {    

    const input: IRegistrarEstudante = {
        nome: req.body.nome,
        logo: req.body.logo, 
        email: req.body.email, 
        senha: req.body.senha,
    }

    res.json(await this._registrarEstudanteUseCase.execute(input));
  }

 
}
