import {DIBuilder} from './DIBuilder';
import {Presenter} from "./Presenter";
import {MvpView} from "./MvpView";

export class PresenterFactory {
  create<T extends MvpView>(type: string, view: Object): Presenter<T> {
    if (DIBuilder.types) {
      if (DIBuilder.types.get(type)) {
        const presenter = new (DIBuilder.types.get(type))(view);
        if (presenter instanceof Presenter) {
          return presenter;
        } else {
          throw new Error(`Can not inject dependency, <${DIBuilder.types.get(type)}> is not a Presenter. make sure your dependency extends Presenter`);
        }
      } else {
        throw new Error(`Can not find <${type}> at DIBuilder map. Make sure you provide it properly`);
      }
    } else {
      throw new Error(`Can not find a properly DIBuilder config. Make sure you did DIBuilder.build()`)
    }
  }
}
