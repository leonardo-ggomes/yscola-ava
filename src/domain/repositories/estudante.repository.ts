import { Estudante } from "../entities/Estudante";

export interface IEstudanteRepository{
    adicionar(estudante: Estudante): Promise<number>,
    obter(): Promise<Estudante>;
    apagar(id: number): Promise<number>;
    atualizar(estudante: Estudante): Promise<number>;    
}