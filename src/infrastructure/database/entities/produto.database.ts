import { Connection } from "mysql2";
import { Produto } from "../../../domain/entities/Produto";
import { IProdutoRepository } from "../../../repository/entities/produto.repository";
import { Db } from "../db.database";
import { DbMySql } from "../mysql/db.mysql";

export class DbProduto extends Db<Produto> implements IProdutoRepository {

    constructor(connection: Connection){
        super(new DbMySql<Produto>(connection));
    }

    public adicionar(produto: Produto): Promise<number>{

        const sql: string = `
            INSERT INTO produtos (nome, precoVenda, precoCompra, quantidadeEstoque, empresaId)
            VALUES
                (?, ?, ?, ?, ?);        
        `

        return this.dbInsert(sql, [
            produto.nome, 
            produto.precoVenda, 
            produto.precoCompra, 
            produto.quantideEstoque, 
            produto.empresaId
        ]);
    }

    public obter(): Promise<Produto>{
        return this.dbSelect("select * from produtos", []);
    }

    public apagar(id: number): Promise<number>{
        return this.dbDelete("delete from produtos where id = ?", [id]);
    }

    public atualizar(produto: Produto): Promise<number>{
        return this.dbUpdate("update produtos set x = y", []);
    }   

}