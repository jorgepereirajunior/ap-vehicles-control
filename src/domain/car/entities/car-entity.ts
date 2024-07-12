import { Brand } from "./brand"
import { Model } from "./model"
import { Bodywork } from "./bodywork"
import { GearType } from "./geartype"

import { CarData } from "./car-data"

import { InvalidBrandError } from '../../../errors/invalid-brand'
import { InvalidModelError } from "../../../errors/invalid-model"
import { Either, left, right } from '../../../shared/either'

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

  public static create(carData: CarData): Either<InvalidBrandError | InvalidModelError, Car> {
    const brandOrError: Either<InvalidBrandError, Brand> = Brand.create(carData.brand)
    const modelOrError: Either<InvalidModelError, Model> = Model.create(carData.model)
    const bodywork = Bodywork.create(carData.bodywork)
    const gearType = GearType.create(carData.gearType)

    if (brandOrError.isLeft()) {
      return left(brandOrError.value)
    }

    if (modelOrError.isLeft()) {
      return left(modelOrError.value)
    }

    const brand: Brand = brandOrError.value
    const model: Model = modelOrError.value
    
    return right(new Car(brand, model, bodywork, carData.engine, gearType, carData.year, carData.color))
  }

  public get getModel(): string {
    return this.model.getValue
  }
}