import {PresenterFactory} from "./PresenterFactory";
import {Injectable} from "./Injectable";

export function inject<T extends Object>(target: Object, propertyKey: string): any {
  return {
    configurable: true,
    get(this: T): T {
      const bound: T = new PresenterFactory().create(target.constructor.name, injectableOnly(this, propertyKey));
      Object.defineProperty(this, propertyKey, {
        value: bound
      });
      return bound;
    }
  };
}


function injectableOnly(object: any, propertyKey: string): Object {
  const view: Object = {};
  const properties = Object.getOwnPropertyNames(Object.getPrototypeOf(object));

  properties.map((property: string) => {
    if (property === propertyKey) {
      return;
    }
    if (object[property].__proto__.name === Injectable.name) {
      Object.defineProperty(view, property, {
        value: () => object[property]()
      });
    }
  });
  return view;
}
