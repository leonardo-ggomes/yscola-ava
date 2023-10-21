import { Estudante } from "../../domain/entities/Estudante";
import { IEstudanteRepository } from "../../repository/entities/estudante.repository"

export class RegistrarEstudante{

    private readonly _estudanteService: IEstudanteRepository;

    constructor(estudanteService: IEstudanteRepository){
        this._estudanteService = estudanteService;
    }

    public execute(): Promise<Estudante> {
        return this._estudanteService.obter()
    }

}