import { Estudante } from "../../../domain/entities/Estudante";
import { EstudanteService } from "../../services/estudante.services";
import { IRegistrarEstudante } from "./registrarEstudanteInput.usecase";


export class RegistrarEstudante{

    private readonly _estudanteService: EstudanteService;

    constructor(estudanteService: EstudanteService){
        this._estudanteService = estudanteService;
    }

    public execute(input: IRegistrarEstudante): Promise<number> {

        const estudante: Estudante = new Estudante(
            "Leonardo",
            "G",
            "email@email.com",
            "senha123",
            1006
        )

       return this._estudanteService.adicionar(estudante);
    }

}