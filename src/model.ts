export class Model {
  public model: string

  private constructor(model: string) {
    this.model = model
    Object.freeze(this)
  }

  public static create(model: string) {
    return new Model(model)
  }
}