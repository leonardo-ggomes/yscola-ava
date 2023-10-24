import * as dotenv from "dotenv";
import mysql from 'mysql2';
import { Server } from "./src/infrastructure/server/server";
import { EstudanteController } from "./src/infrastructure/controllers/estudante.controller";
import { RegistrarEstudante } from "./src/application/usecases/gerenciarconta/registrarEstudante.usecase";
import { EstudanteService } from "./src/application/services/estudante.services";
import { DbEstudante } from "./src/infrastructure/database/entities/estudante.database";

class Startup {

  private static mysqlConnection: mysql.Connection = mysql.createConnection({database: process.env.DATABASE, host: process.env.HOST, password: process.env.PASSWORD, user: process.env.USER});

  public static execute() {
    Server.initialize();
    Startup.inject();
  }

  private static inject() {
    const instances: any[] = [];

    //injeção de dependência
    instances.push(
      new EstudanteController(
        new RegistrarEstudante(
          new EstudanteService(
            new DbEstudante(this.mysqlConnection)
          )
        )
      )
    );
  

    Server.useRoute(instances);
  }
}

Startup.execute();
