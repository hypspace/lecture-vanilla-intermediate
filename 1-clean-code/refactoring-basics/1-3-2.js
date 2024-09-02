export class Order {
  #data
  constructor(aRecord) {
    this.#data = aRecord
  }

  get quantity() {
    return this.#data.quantity
  }
  get itemPrice() {
    return this.#data.itemPrice
  }

  get price() {
    const bestPrice = this.quantity * this.itemPrice
    const discount = Math.max(0, this.quantity - 500) * this.itemPrice * 0.05
    const delivery = Math.min(this.quantity * this.itemPrice * 0.1, 100)
    return bestPrice - discount + delivery
  }
}
