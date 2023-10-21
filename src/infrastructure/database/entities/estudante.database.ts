import { Estudante } from "../../../domain/entities/Estudante";
import { IEstudanteRepository } from "../../../repository/entities/estudante.repository";
import { Db } from "../db.database";
import { DbMySql } from "../mysql/db.mysql";

export class DbEstudante extends Db<Estudante> implements IEstudanteRepository {

    constructor(){
        super(new DbMySql<Estudante>());
        
        this._connection.dbConnect()
    }

    public adicionar(estudante: Estudante): Promise<number>{
        return this.dbInsert("insert into estudantes values()",estudante);
    }

    public obter(): Promise<Estudante>{
        return this.dbSelect("select * from estudantes");
    }

    public apagar(id: number): Promise<number>{
        return this.dbDelete("delete from estudantes where id = ?", id);
    }

    public atualizar(estudante: Estudante): Promise<number>{
        return this.dbUpdate("update estudante set x = y",estudante);
    }   

}