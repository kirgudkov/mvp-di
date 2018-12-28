export class DIBuilder {

  static types: Map<string, Object>;

  static build(types: Map<string, Object>) {
    DIBuilder.types = types;
  }
}
