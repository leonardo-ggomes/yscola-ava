import express, { Application } from 'express';
import { PATH_KEY } from './decorators/decorator.server';

export class Server{

    private static app : Application;

    public static initialize(): void{
        Server.app = express();      

        Server.middleware();
        Server.listen();
    }

    public static listen(port : Number = 3000) : void {
        Server.app.listen(port, () => console.log(`Online Server on port ${port}`));
    }

    private static middleware(): void{
        Server.app.use(express.json())
    }

    public static useRoute(instances: any[]): void{

        instances.forEach(instance => {
            for (const methodName of Object.getOwnPropertyNames(Object.getPrototypeOf(instance))) {

                const path = Reflect.getMetadata(PATH_KEY, instance, methodName);
    
                if (path) {
                  Server.app.get(path, instance[methodName].bind(instance));
                }
              }   
        });

    }

}