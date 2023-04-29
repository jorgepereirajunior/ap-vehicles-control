import { Either, left, right } from './shared/either'
import { InvalidBrandError } from './errors/invalid-brand'
export class Brand {
  brand: string

  private constructor(brand: string) {
    this.brand = brand
    Object.freeze(this)
  }

  public static create(brand: string): Either<InvalidBrandError, Brand> {
    if (!Brand.validate(brand)) {
      return left(new InvalidBrandError(brand))
    }
    
    return right(new Brand(brand))
  }

  public get getValue(): string {
    return this.brand
  }

  static validate(brand: string): boolean {
    if (brand.length === 0) {
      return false
    }

    return true
  }
}