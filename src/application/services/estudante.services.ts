import { Estudante } from "../../domain/entities/Estudante";
import { IEstudanteRepository } from "../../repository/entities/estudante.repository";

export class EstudanteService implements IEstudanteRepository{

    private readonly _estudanteRepository: IEstudanteRepository;

    constructor(estudanteRepostiory: IEstudanteRepository){
        this._estudanteRepository = estudanteRepostiory;
    }

    public async adicionar(estudante: Estudante): Promise<number> {
        estudante.id = await this._estudanteRepository.adicionar(estudante);
        return estudante.id;
    }

    public obter(): Promise<Estudante>{
        return this._estudanteRepository.obter();
    }

    public apagar(id: number): Promise<number>{
        return this._estudanteRepository.apagar(id);
    }

    public atualizar(estudante: Estudante): Promise<number>{
        return this._estudanteRepository.atualizar(estudante);
    }  

}