import { Request, Response } from "express";
import { route } from '../server/decorators/decorator.server';
import { methods } from "../server/enums/enum.server";
import { RegistrarEstudante } from "../../application/usecases/registrarestudante.usecase";

export class EstudanteController{

    private readonly _registrarEstudanteUseCase: RegistrarEstudante;

    constructor(registrarEstudanteUseCase: RegistrarEstudante){
        this._registrarEstudanteUseCase = registrarEstudanteUseCase
    }
           
    @route("/", methods.GET)
    public async index(req: Request, res: Response): Promise<void>{
        res.json(await this._registrarEstudanteUseCase.execute())
    }

}