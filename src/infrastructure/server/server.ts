import express, { Application } from 'express';
import { EstudanteService } from '../../application/services/estudante.services';
import { EstudanteController } from '../controllers/estudante.controller';
import { DbEstudante } from '../database/entities/estudante.database';

export class Server{

    private static app : Application;
    private static _estudanteController: EstudanteController;

    public static initialize(){
        Server.app = express();

        const dbEstudante: DbEstudante = new DbEstudante();

        Server._estudanteController = new EstudanteController(
            new EstudanteService(dbEstudante)
        );

        Server.middleware();
        Server.route();
        Server.listen();
    }

    public static listen(port : Number = 3000) : void {
        Server.app.listen(port, () => console.log(`Online Server on port ${port}`));
    }

    private static middleware(){
        Server.app.use(express.json())
    }

    private static route(){
        Server.app.get('/', Server._estudanteController.index.bind(Server._estudanteController));
    }

    // private static useRoute(){
    //     for (const methodName of Object.getOwnPropertyNames(Object.getPrototypeOf(minhaInstancia))) {
    //         const path = Reflect.getMetadata(PATH_KEY, minhaInstancia, methodName);
    //         if (path) {
    //           app.get(path, minhaInstancia[methodName].bind(minhaInstancia));
    //         }
    //       }          
    // }

}