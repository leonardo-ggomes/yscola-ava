import { Server } from './src/infrastructure/server/server';

class Startup{

    public static execute(){
        Server.initialize();
    }

}

Startup.execute()

