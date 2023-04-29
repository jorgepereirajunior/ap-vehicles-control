export class InvalidBrandError extends Error implements DomainError {
  
  constructor (brand: string) {
    super(`The brand "${brand}" is invalid`)
    this.name = 'InvalidBrandError'
  }
}