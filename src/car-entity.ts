import { Brand } from "./brand"
import { Model } from "./model"
import { Bodywork } from "./bodywork"
import { GearType } from "./geartype"

import { CarData } from "./car-data"

import { InvalidBrandError } from './errors/invalid-brand'
import { Either, left, right } from './shared/either'

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
    const brandOrError: Either<InvalidBrandError, Brand> = Brand.create(carData.brand)
    const model = Model.create(carData.model)
    const bodywork = Bodywork.create(carData.bodywork)
    const gearType = GearType.create(carData.gearType)

    if (brandOrError.isLeft()) {
      return left(brandOrError.value)
    }

    const brand: Brand = brandOrError.value
    return right(new Car(brand, model, bodywork, carData.engine, gearType, carData.year, carData.color))
  }

  // public updateBrand(newBrand: string) {
  //   this.setBrand = newBrand
  // }

  // public get getBrand(): string {
  //   return this.brand.getValue
  // }

  // private set setBrand(value: string) {
  //   this.brand = Brand.create(value)
  // }

  public updateModel(newModel: string) {
    this.setModel = newModel
  }

  public get getModel(): string {
    return this.model.getValue
  }

  private set setModel(value: string) {
    this.model = Model.create(value)
  }
}