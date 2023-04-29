export class Brand {
  brand: string

  private constructor(brand: string) {
    this.brand = brand
    Object.freeze(this)
  }

  public static create(brand: string) {
    return new Brand(brand)
  }

  public get getValue(): string {
    return this.brand
  }
}