import { Param } from 'mvp-di';

export class Presenter<T> {
  [key: string]: any

  protected view!: T;

  constructor(view: T) {
    this.view = view;
  }

  lateInit(...params: Param[]) {
    params.forEach(param => this[Object.keys(param)[0]] = param[Object.keys(param)[0]]);
  }
}
