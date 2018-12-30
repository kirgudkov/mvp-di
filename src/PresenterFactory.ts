import {DIBuilder} from './DIBuilder';

export class PresenterFactory {
  create<T>(type: string, view: Object): T {
    if (DIBuilder.types) {
      if ((<any>DIBuilder.types)[type]) {
        return new (<any>DIBuilder.types)[type](view);
      } else {
        throw new Error(`Can not find an injectable object for <${type}> at DIBuilder config. Make sure you provide it properly`);
      }
    } else {
      throw new Error(`Can not find a properly DIBuilder config. Make sure you did DIBuilder.build()`)
    }
  }
}
