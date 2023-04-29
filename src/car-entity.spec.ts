import { CarData } from "./car-data"
import { Car } from "./car-entity"
import { Right } from "./shared/either"

describe('CAR ENTITY TESTS', () => {
  test('Should create a car with factory method', () => {
    const carData: CarData = {
      brand: 'Fiat',
      model: 'Punto',
      bodywork: 'Hatch',
      engine: 'motor 1.4',
      gearType: 'manual',
      year: '2013',
      color: 'vermelho'
    }
    const car = Car.create(carData)

    expect(car).toBeInstanceOf(Right)
  })

  // test('Should update brand with updateBrand method', () => {
  //   const carData: CarData = {
  //     brand: 'Fiat',
  //     model: 'Punto',
  //     bodywork: 'Hatch',
  //     engine: 'motor 1.4',
  //     gearType: 'manual',
  //     year: '2013',
  //     color: 'vermelho'
  //   }

  //   const newCar = Car.create(carData)
  //   newCar.updateBrand('VolksWagen')
  //   expect(newCar.getBrand).toBe('VolksWagen')
  // })


  // test('Should update model with updateModel method', () => {
  //   const carData: CarData = {
  //     brand: 'Fiat',
  //     model: 'Punto',
  //     bodywork: 'Hatch',
  //     engine: 'motor 1.4',
  //     gearType: 'manual',
  //     year: '2013',
  //     color: 'vermelho'
  //   }

  //   const newCar = Car.create(carData)
  //   newCar.updateModel('HB20')
  //   expect(newCar.getModel).toBe('HB20')
  // })
})