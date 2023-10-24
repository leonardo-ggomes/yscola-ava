import { Empresa } from "../../domain/entities/Empresa";
import { Produto } from "../../domain/entities/Produto";
import { IEmpresaRepository } from "../../repository/entities/empresa.repository";
import { ProdutoService } from "./produto.services";

export class EmpresaService implements IEmpresaRepository{


    private readonly _empresaRepository: IEmpresaRepository;
    private readonly _produtoService: ProdutoService;

    constructor(empresaService: IEmpresaRepository, produtoService: ProdutoService){
        this._empresaRepository = empresaService;
        this._produtoService = produtoService;
    }

    public async adicionar(empresa: Empresa): Promise<number> {
        empresa.id = await this._empresaRepository.adicionar(empresa);

        const produtoA = new Produto("Produto A", 200, 100, 500, empresa.id);
        const produtoB = new Produto("Produto B", 100, 50, 2500, empresa.id);
        const produtoC = new Produto("Produto C", 10, 5, 5000, empresa.id);

        empresa.adicionarProduto(produtoA);
        empresa.adicionarProduto(produtoB);
        empresa.adicionarProduto(produtoC);

        empresa.produtos.forEach(async produto => await this._produtoService.adicionar(produto));

        return empresa.id;
    }

    public obter(): Promise<Empresa>{
        return this._empresaRepository.obter();
    }

    public apagar(id: number): Promise<number>{
        return this._empresaRepository.apagar(id);
    }

    public atualizar(empresa: Empresa): Promise<number>{
        return this._empresaRepository.atualizar(empresa);
    }  

}