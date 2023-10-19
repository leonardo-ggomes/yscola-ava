import { Estudante } from "../../domain/entities/Estudante";
import { IEstudanteRepository } from "../../domain/repositories/estudante.repository";

export class EstudanteService implements IEstudanteRepository{


    private readonly _estudanteService: IEstudanteRepository;

    constructor(estudanteService: IEstudanteRepository){
        this._estudanteService = estudanteService;
    }

    public adicionar(estudante: Estudante): Promise<number> {
        return this._estudanteService.adicionar(estudante)
    }

    public obter(): Promise<Estudante>{
        return this._estudanteService.obter()
    }

    public apagar(id: number): Promise<number>{
        return this._estudanteService.apagar(id)
    }

    public atualizar(estudante: Estudante): Promise<number>{
        return this._estudanteService.atualizar(estudante)
    }  

}