import { Application, application } from 'express';
import { EstudanteService } from '../../application/services/estudante.services';

export class Server{

    private readonly server : Application;

    constructor(){
        this.server = application;

        this.injectionDependency()
    }

    listen(port : Number = 3000) : void {
        this.server.listen(port, () => console.log(`Online Server on port ${port}`))
    }

    injectionDependency(){

    }

}