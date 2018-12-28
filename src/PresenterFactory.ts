import {DIBuilder} from './DIBuilder';

export class PresenterFactory {
  create<T>(type: string, view: Object): T {
    const object: T = new (<any>DIBuilder.types)[type](view);

    function getView(): Object {
      return view
    }

    Object.defineProperty(object, 'getView', {
      value: getView
    });

    return object
  }
}
