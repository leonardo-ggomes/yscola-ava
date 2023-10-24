import { Connection } from "mysql2";
import { Empresa } from "../../../domain/entities/Empresa";
import { IEmpresaRepository } from "../../../repository/entities/empresa.repository";
import { Db } from "../db.database";
import { DbMySql } from "../mysql/db.mysql";

export class DbEmpresa extends Db<Empresa> implements IEmpresaRepository {

    constructor(connection: Connection){
        super(new DbMySql<Empresa>(connection));
    }

    public adicionar(empresa: Empresa): Promise<number>{

        const sql: string = `
            INSERT INTO empresa (nome, logo, email, senha, saldo, quantidadeFuncionarios, folhaPagamento, salarioMinimoVigente)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `

        return this.dbInsert(sql, [
            empresa.nome, 
            empresa.logo, 
            empresa.email, 
            empresa.senha, 
            empresa.saldo,
            empresa.quantidadeFuncionarios,
            empresa.folhaPagamento,
            empresa.salarioMinimoVigente
        ]);
    }

    public obter(): Promise<Empresa>{
        return this.dbSelect("select * from empresa", []);
    }

    public apagar(id: number): Promise<number>{
        return this.dbDelete("delete from empresa where id = ?", [id]);
    }

    public atualizar(empresa: Empresa): Promise<number>{
        return this.dbUpdate("update empresa set x = y", []);
    }   

}