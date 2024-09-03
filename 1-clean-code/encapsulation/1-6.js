export class Shipment {
  #trackingNumber
  #shippingCompany
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber
    this.#shippingCompany = shippingCompany
  }

  get trackingInfo() {
    return this.display()
  }

  get shippingCompany() {
    return this.#shippingCompany
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg
  }

  get trackingNumber() {
    return this.#trackingNumber
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg
  }

  display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }
}

const shipment = new Shipment(999, 'Maersk')
console.log(shipment.trackingInfo) // Maersk: 999

shipment.shippingCompany = 'COSCO'
console.log(shipment.trackingInfo) // COSCO: 999
