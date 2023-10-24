import { Empresa } from "../../domain/entities/Empresa";

export interface IEmpresaRepository{
    adicionar(empresa: Empresa): Promise<number>,
    obter(): Promise<Empresa>;
    apagar(id: number): Promise<number>;
    atualizar(empresa: Empresa): Promise<number>;    
}