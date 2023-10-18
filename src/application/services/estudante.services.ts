import { Estudante } from "../../domain/entities/Estudante";
import { IEstudanteRepository } from "../../domain/repositories/estudante.repository";

export class EstudanteService implements IEstudanteRepository{


    private readonly _estudanteService: IEstudanteRepository;

    constructor(estudanteService: IEstudanteRepository){
        this._estudanteService = estudanteService;
    }

    adicionar(estudante: Estudante): Promise<number> {
        return this._estudanteService.adicionar(estudante)
    }

    obter(): Promise<Estudante>{
        return this._estudanteService.obter()
    }

    apagar(id: number): Promise<number>{
        return this._estudanteService.apagar(id)
    }

    atualizar(estudante: Estudante): Promise<number>{
        return this._estudanteService.atualizar(estudante)
    }  

}