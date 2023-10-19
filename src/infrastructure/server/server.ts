import express, { Application } from 'express';
import { EstudanteService } from '../../application/services/estudante.services';
import { EstudanteController } from '../controllers/estudante.controller';
import { DbEstudante } from '../database/entities/estudante.database';

export class Server{

    private readonly server : Application;
    private readonly _estudanteController: EstudanteController;

    constructor(){
        this.server = express();

        const dbEstudante: DbEstudante = new DbEstudante();

        this._estudanteController = new EstudanteController(
            new EstudanteService(dbEstudante)
        );

        this.middleware()
        this.route();
    }

    public listen(port : Number = 3000) : void {
        this.server.listen(port, () => console.log(`Online Server on port ${port}`));
    }

    private middleware(){
        this.server.use(express.json())
    }

    private route(){
        this.server.get('/', this._estudanteController.index.bind(this._estudanteController));
    }

}