import 'reflect-metadata';

export const PATH_KEY = Symbol('path');

export function route(path: string): any {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata(PATH_KEY, path, target, propertyKey);
      };
}
