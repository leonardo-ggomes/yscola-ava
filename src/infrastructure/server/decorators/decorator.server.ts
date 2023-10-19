import 'reflect-metadata';
import { methods } from '../enums/enum.server';

export const PATH_KEY = Symbol('path');

export function route(path: NonNullable<string>, method: methods): any {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata(PATH_KEY, {path, method}, target, propertyKey);
      };
}
