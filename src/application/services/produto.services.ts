import { Produto } from "../../domain/entities/Produto";
import { IProdutoRepository } from "../../repository/entities/produto.repository";

export class ProdutoService implements IProdutoRepository{


    private readonly _produtoRepository: IProdutoRepository;

    constructor(produtoService: IProdutoRepository){
        this._produtoRepository = produtoService;
    }

    public adicionar(produto: Produto): Promise<number> {
        return this._produtoRepository.adicionar(produto)
    }

    public obter(): Promise<Produto>{
        return this._produtoRepository.obter()
    }

    public apagar(id: number): Promise<number>{
        return this._produtoRepository.apagar(id)
    }

    public atualizar(produto: Produto): Promise<number>{
        return this._produtoRepository.atualizar(produto)
    }  

}