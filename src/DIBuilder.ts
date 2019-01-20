import {PresenterMap} from "./PresenterMap";

export class DIBuilder {
  static types: PresenterMap<any>;
  static build(types: PresenterMap<any>) {
    this.types = types;
  }
}
