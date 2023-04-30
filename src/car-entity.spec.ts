import { CarData } from "./car-data"
import { Car } from "./car-entity"

describe('CAR ENTITY TESTS', () => {
  // test.skip('Should create a car with contructor', () => {
  //   const car = new Car('CarBrand', 'CarModel', '2015')

  //   expect(car).toBeInstanceOf(Car)
  // })

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

    expect(car).toBeInstanceOf(Car)
  })
})