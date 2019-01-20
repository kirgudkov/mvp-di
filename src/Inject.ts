import {PresenterFactory} from "./PresenterFactory";
import {Injectable} from "./Injectable";
import {Presenter} from "./Presenter";
import {MvpView} from "./MvpView";

export function inject<T extends MvpView>(target: T, propertyKey: string): any {
  return {
    configurable: true,
    get(this: T): Presenter<T> {
      const bound: Presenter<T> = new PresenterFactory().create(target.getClassName(), viewPropsOnly(this, propertyKey));
      Object.defineProperty(this, propertyKey, {
        value: bound
      });
      return bound;
    }
  };
}


function viewPropsOnly(object: any, propertyKey: string): Object {
  const view: Object = {};
  const properties = Object.getOwnPropertyNames(Object.getPrototypeOf(object));

  properties.map((property: string) => {
    if (property === propertyKey) {
      return;
    }
    if (object[property]) {
      if (object[property].__proto__) {
        if (object[property].__proto__.name === Injectable.name) {
          Object.defineProperty(view, property, {
            value: object[property]
          });
        }
      }
    }
  });
  return view;
}
