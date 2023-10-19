import { Request, Response } from "express";
import { EstudanteService } from "../../application/services/estudante.services";
import { route } from '../server/decorators/decorator.server';

export class EstudanteController{

    private readonly _estudanteService: EstudanteService;

    constructor(estudanteService: EstudanteService){
        this._estudanteService = estudanteService
    }

    @route("/")
    public async index(req: Request, res: Response): Promise<void>{
        res.send(await this._estudanteService.obter())
    }


}