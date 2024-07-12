import { InvalidModelError } from "../../../errors/invalid-model"
import { Either, left, right } from "../../../shared/either"

export class Model {
  public model: string

  private constructor(model: string) {
    this.model = model
    Object.freeze(this)
  }

  public static create(model: string): Either<InvalidModelError, Model> {
    if (!Model.validate(model)) {
      return left(new InvalidModelError(model))
    }

    return right(new Model(model))
  }

  public get getValue(): string {
    return this.model
  }

  static validate(model: string): boolean {
    if (model.length === 0) {
      return false
    }

    return true
  }
}