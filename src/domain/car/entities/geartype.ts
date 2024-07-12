export class GearType {
  public gearType: string

  private constructor(gearType: string) {
    this.gearType = gearType
    Object.freeze(this)
  }

  public static create(gearType: string) {
    return new GearType(gearType)
  }
}