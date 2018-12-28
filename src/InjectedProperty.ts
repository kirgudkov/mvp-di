import {Injectable} from "./Injectable";

export function injectedProperty<T extends Function>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
  Object.setPrototypeOf(target[propertyKey], Injectable);
  return descriptor
}
