export class Car {
  public brand: string
  public model: string
  public year: string

  constructor(brand: string, model: string, year: string) {
    this.brand = brand
    this.model = model
    this.year = year
  }

  public static create(brand: string, model: string, year: string) {
    console.log()
  }
}