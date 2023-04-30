import { CarData } from "./car-data"

export class Car {
  public brand: string
  public model: string
  public bodywork: string
  public engine: string
  public gearType: string
  public year: string
  public color: string

  constructor(carData: CarData) {
    this.brand = carData.brand
    this.model = carData.model
    this.bodywork = carData.bodywork
    this.engine = carData.engine
    this.gearType = carData.engine
    this.year = carData.year
    this.color = carData.color
  }

  public static create(carData: CarData) {
    return new Car(carData)
  }
}