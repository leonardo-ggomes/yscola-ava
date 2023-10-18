import { Estudante } from "../../../domain/entities/Estudante";
import { IEstudanteRepository } from "../../../domain/repositories/estudante.repository";
import { Db } from "../db.database";
import { IDatabase } from "../../interfaces/database.interface";
import { DbMySql } from "../mysql/db.mysql";

export class DbEstudante extends Db<Estudante> implements IEstudanteRepository {

    constructor(t: IDatabase<Estudante>){
        super(new DbMySql<Estudante>());
        
        this._connection.dbConnect()
    }

    adicionar(estudante: Estudante): Promise<number>{
        return this.dbInsert("insert into estudantes values()",estudante);
    }

    obter(): Promise<Estudante>{
        return this.dbSelect("select * from estudantes");
    }

    apagar(id: number): Promise<number>{
        return this.dbDelete("delete from estudantes where id = ?", id);
    }

    atualizar(estudante: Estudante): Promise<number>{
        return this.dbUpdate("update estudante set x = y",estudante);
    }   

}