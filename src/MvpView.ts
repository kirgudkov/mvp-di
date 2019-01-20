export interface MvpView {
  getClassName: TypeFunction
}

interface TypeFunction {
  (): string
}
