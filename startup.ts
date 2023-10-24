import * as dotenv from "dotenv";
import mysql from 'mysql2';
import { EmpresaService } from "./src/application/services/empresa.services";
import { ProdutoService } from "./src/application/services/produto.services";
import { RegistrarEmpresa } from "./src/application/usecases/gerenciarconta/registrarEmpresa.usecase";
import { EmpresaController } from "./src/infrastructure/controllers/empresa.controller";
import { DbEmpresa } from "./src/infrastructure/database/entities/empresa.database";
import { DbProduto } from "./src/infrastructure/database/entities/produto.database";
import { Server } from "./src/infrastructure/server/server";

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
      new EmpresaController(
        new RegistrarEmpresa(
          new EmpresaService(
            new DbEmpresa(this.mysqlConnection),
            new ProdutoService(new DbProduto(this.mysqlConnection))
          )
        )
      )
    );
  

    Server.useRoute(instances);
  }
}

Startup.execute();
