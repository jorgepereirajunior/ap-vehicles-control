export class Bodywork {
  public bodywork: string

  private constructor(bodywork: string) {
    this.bodywork = bodywork
    Object.freeze(this)
  }

  public static create(bodywork: string) {
    return new Bodywork(bodywork)
  }
}