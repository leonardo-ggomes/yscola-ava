import { IEstudanteRepository } from "../../domain/repositories/estudante.repository"

export class RegistrarEstudante{

    private readonly _registrarEstudante: IEstudanteRepository;

    constructor(registrarEstudante: IEstudanteRepository){
        this._registrarEstudante = registrarEstudante;
    }

    public async execute(): Promise<void> {
        this._registrarEstudante.obter()
    }

}