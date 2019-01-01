declare module 'presenter-injection' {
  export function bind<T extends Function>(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
  export function viewProperty(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
  export function inject<T extends Object>(target: Object, propertyKey: string): any;

  export class Injectable extends Function {}
  export class PresenterFactory {
    create<T>(type: string, view: Object): T;
  }
  export class Presenter<T> {
    protected view: T;
    constructor(view: T);
  }
  export class DIBuilder {
    static types: Object;
    static build(types: Object): void;
  }
}
