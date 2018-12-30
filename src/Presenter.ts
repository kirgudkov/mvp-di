export class Presenter<T> {
  protected view!: T;

  constructor(view: T) {
    this.view = view;
  }
}
