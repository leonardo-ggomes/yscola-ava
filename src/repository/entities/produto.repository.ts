import { Produto } from "../../domain/entities/Produto";

export interface IProdutoRepository{
    adicionar(produto: Produto): Promise<number>,
    obter(): Promise<Produto>;
    apagar(id: number): Promise<number>;
    atualizar(produto: Produto): Promise<number>;    
}