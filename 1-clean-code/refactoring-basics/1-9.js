export class Reading {
  #customer
  #quantity
  #month
  #year
  constructor(options) {
    this.#customer = options.customer
    this.#quantity = options.quantity
    this.#month = options.month
    this.#year = options.year
  }

  get acquireReading() {
    return {
      customer: this.#customer,
      quantity: this.#quantity,
      month: this.#month,
      year: this.#year,
    }
  }
  get quantity() {
    return this.#quantity
  }
  get baseRate() {
    return this.#year === 2017 && this.#month === 5 ? 0.1 : 0.2
  }
  get baseCharge() {
    return this.baseRate * this.quantity
  }
  get taxThreshold() {
    return 0.1
  }
  get taxableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold)
  }
}

const reading = new Reading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
})

export function acquireReading() {
  return reading
}
