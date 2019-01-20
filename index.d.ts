export function bind<T extends Function>(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
export function viewProperty(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>;
export function inject<T extends Object>(target: Object, propertyKey: string): any;

export class Presenter<T> {
  view: T;
}

export interface MvpView {
  getClassName(): string
}

export class PresenterMap<T>  extends Map<T, Presenter>{}

export class DIBuilder {
  static types: PresenterMap<any>;
  static build(types: PresenterMap<any>): void;
}
