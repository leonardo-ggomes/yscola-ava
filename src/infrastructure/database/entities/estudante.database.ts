import { Connection } from "mysql2";
import { Db } from "../db.database";
import { DbMySql } from "../mysql/db.mysql";
import { Estudante } from "../../../domain/entities/Estudante";
import { IEstudanteRepository } from "../../../repository/entities/estudante.repository";

export class DbEstudante extends Db<Estudante> implements IEstudanteRepository {

    constructor(connection: Connection){
        super(new DbMySql<Estudante>(connection));
    }

    public adicionar(estudante: Estudante): Promise<number>{

        const sql: string = `
            INSERT INTO estudantes (nome, sobrenome, email, senha, carteirinha)
            VALUES (?, ?, ?, ?, ?);
        `

        return this.dbInsert(sql, [
            estudante.nome, 
            estudante.sobrenome,
            estudante.email, 
            estudante.senha,
            estudante.carteirinha
        ]);
    }

    public obter(): Promise<Estudante>{
        return this.dbSelect("select * from estudantes", []);
    }

    public apagar(id: number): Promise<number>{
        return this.dbDelete("delete from estudantes where id = ?", [id]);
    }

    public atualizar(estudante: Estudante): Promise<number>{
        return this.dbUpdate("update estudantes set id = ?", [estudante.id]);
    }   

}