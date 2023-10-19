import swaggerJSDoc from 'swagger-jsdoc';
import {options as swaggerDefinition} from './swaggerDef';

const options = {
  swaggerDefinition,
  apis: ['./dist/src/infrastructure/controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;