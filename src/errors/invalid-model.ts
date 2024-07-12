export class InvalidModelError extends Error implements DomainError {
  constructor(model: string) {
    super(`The model "${model}" is invalid`)
    this.name = 'InvalidModelError'
  }
}