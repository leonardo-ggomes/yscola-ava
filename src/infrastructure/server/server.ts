import express, { Application } from 'express';
import { PATH_KEY } from './decorators/decorator.server';
import { methods } from './enums/enum.server';
import { info } from '../../utils/messages.utils';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../../../swagger-jsdoc';

export class Server{

    private static app : Application;

    public static initialize(): void{
        Server.app = express();      

        Server.middleware();
        Server.listen();
        Server.useDoc();
    }

    public static listen(port : Number = 3000) : void {
        Server.app.listen(port, () => console.log(`Online Server on port ${port}`));
    }

    private static middleware(): void{
        Server.app.use(express.json())
    }

    private static useDoc(){
        Server.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

    public static useRoute(instances: any[]): void{

        instances.forEach(instance => {
            for (const methodName of Object.getOwnPropertyNames(Object.getPrototypeOf(instance))) {

                const metadata: {path: string, method: methods} = Reflect.getMetadata(PATH_KEY, instance, methodName);
                
                if (metadata) {                         
                    switch(metadata.method){
                        case methods.GET:  Server.app.get(metadata.path, instance[methodName].bind(instance)); break;
                        case methods.POST:  Server.app.post(metadata.path, instance[methodName].bind(instance)); break;
                        case methods.PUT:  Server.app.put(metadata.path, instance[methodName].bind(instance)); break;
                        case methods.DELETE:  Server.app.delete(metadata.path, instance[methodName].bind(instance)); break;
                        default: console.info(info.notRouter)
                    }                   
                }
              }   
        });

    }

}