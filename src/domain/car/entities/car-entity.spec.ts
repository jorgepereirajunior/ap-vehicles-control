import { CarData } from "./car-data"
import { Car } from "./car-entity"
import { InvalidBrandError } from "../../../errors/invalid-brand"
import { InvalidModelError } from "../../../errors/invalid-model"
import { left } from '../../../shared/either'

describe('CAR ENTITY TESTS', () => {
  test('Should not create a car with invalid brand', () => {
    const brand = ''
    
    const carData: CarData = {
      brand,
      model: 'Punto',
      bodywork: 'Hatch',
      engine: 'motor 1.4',
      gearType: 'manual',
      year: '2013',
      color: 'vermelho'
    }

    const car = Car.create(carData)

    expect(car).toEqual(left(new InvalidBrandError(brand)))
  })

  test('Should not create a car with invalid model', () => {
    const model = ''
    
    const carData: CarData = {
      brand: 'Fiat',
      model,
      bodywork: 'Hatch',
      engine: 'motor 1.4',
      gearType: 'manual',
      year: '2013',
      color: 'vermelho'
    }

    const car = Car.create(carData)

    expect(car).toEqual(left(new InvalidModelError(model)))
  })

})
