import { Car } from "./car-entity"

describe('CAR ENTITY TESTS', () => {
  test('Should create a car with contructor', () => {
    const car = new Car('CarBrand', 'CarModel', '2015')

    expect(car).toBeInstanceOf(Car)
  })
})