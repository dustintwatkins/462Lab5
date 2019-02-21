import Temperature from './Temperature'
import ClientCommunicator from '../ClientCommunicator/ClientCommunicator'
import Profile from './Profile'


class Model {
  private static _instance: Model
  private _temps: Temperature[]
  private _violations: Temperature[]
  private _profile: Profile

  private constructor () {
    this._temps = []
    this._violations = []
  }

  public static get_instance ():Model {
    if (!Model._instance){
      Model._instance = new Model()
    }
    return Model._instance
  }

  get profile (): Profile {
    return this._profile
  }

  setProfile (profile: Profile) {
    this._profile = profile
  }

  get temps (): Temperature[] {
    return this._temps
  }

  setTemps (temps: Temperature[]) {
    this._temps = temps
  }

  setViolations (temps: Temperature[]) {
    this._violations = temps
  }

  get violations (): Temperature[] {
    return this._violations
  }

  getLastThreeViolations (): Temperature[] {
    if (this.violations[this.violations.length - 1] === undefined || null) {
      return []
    }
    return [this.violations[this.violations.length - 1], this.violations[this.violations.length - 2], this.violations[this.violations.length - 3]]
  }

  getMostRecentTemp (): Temperature {
    return this.temps[0] ? this.temps[this.temps.length - 1] : null
  }

  getLastThreeTemps (): Temperature[] {
    if (this.temps[this.temps.length - 1] === undefined || null) {
      return []
    }
    return [this.temps[this.temps.length - 1], this.temps[this.temps.length - 2], this.temps[this.temps.length - 3]]
  }
}

export default Model

