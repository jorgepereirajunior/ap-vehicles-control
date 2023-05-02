import { Brand } from "./brand"
import { Model } from "./model"
import { Bodywork } from "./bodywork"
import { GearType } from "./geartype"

import { CarData } from "./car-data"

export class Car {
  public brand: Brand
  public model: Model
  public bodywork: Bodywork
  public engine: string
  public gearType: GearType
  public year: string
  public color: string

  constructor(
    brand: Brand,
    model: Model,
    bodywork: Bodywork,
    engine: string,
    gearType: GearType,
    year: string,
    color: string
  ) {
    this.brand = brand
    this.model = model
    this.bodywork = bodywork
    this.engine = engine
    this.gearType = gearType
    this.year = year
    this.color = color
  }

  public static create(carData: CarData) {
    const brand = Brand.create(carData.brand)
    const model = Model.create(carData.model)
    const bodywork = Bodywork.create(carData.bodywork)
    const gearType = GearType.create(carData.gearType)

    return new Car(brand, model, bodywork, carData.engine, gearType, carData.year, carData.color)
  }
}