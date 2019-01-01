import {Injectable} from "./Injectable";

export function injectableProperty(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
  if (!descriptor || (typeof descriptor.value !== 'function')) {
    throw new TypeError(`Only methods can be decorated with @injectedProperty. ${propertyKey} is not a method!`);
  }

  Object.setPrototypeOf(target[propertyKey], Injectable);
  return descriptor;
}
