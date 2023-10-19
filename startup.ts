import { RegistrarEstudante } from './src/application/usecases/registrarestudante.usecase';
import { EstudanteController } from './src/infrastructure/controllers/estudante.controller';
import { DbEstudante } from './src/infrastructure/database/entities/estudante.database';
import { Server } from './src/infrastructure/server/server';

class Startup{
 
    public static execute(){
        Server.initialize();
        Startup.inject();
    }

    private static inject(){            
        const instances: any[] = []

        //injeção de dependência
        instances.push(new EstudanteController(new RegistrarEstudante(new DbEstudante())));

        
        Server.useRoute(instances);
    }

}

Startup.execute()

