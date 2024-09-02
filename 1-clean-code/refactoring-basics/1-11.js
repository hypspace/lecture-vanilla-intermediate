class Product {
  #basePrice
  #discountRate
  #discountThreshold
  constructor(basePrice, discountRate, discountThreshold) {
    this.#basePrice = basePrice
    this.#discountRate = discountRate
    this.#discountThreshold = discountThreshold
  }

  get basePrice() {
    return this.#basePrice
  }
  get discountRate() {
    return this.#discountRate
  }
  get discountThreshold() {
    return this.#discountThreshold
  }

  calculateBasePrice(quantity) {
    return this.basePrice * quantity
  }
  calculateDiscount(quantity) {
    return (
      Math.max(quantity - this.discountThreshold, 0) *
      this.basePrice *
      this.discountRate
    )
  }
}

class ShippingMethod {
  #discountThreshold
  #feePerCase
  #discountedFee
  constructor(discountThreshold, feePerCase, discountedFee) {
    this.#discountThreshold = discountThreshold
    this.#feePerCase = feePerCase
    this.#discountedFee = discountedFee
  }

  get discountThreshold() {
    return this.#discountThreshold
  }
  get feePerCase() {
    return this.#feePerCase
  }
  get discountedFee() {
    return this.#discountedFee
  }

  calculateShippingPerCase(basePrice) {
    return basePrice > this.discountThreshold
      ? this.discountedFee
      : this.feePerCase
  }
  calculateShippingCost(quantity, basePrice) {
    const shippingPerCase =
      basePrice > this.discountThreshold ? this.discountedFee : this.feePerCase
    return quantity * shippingPerCase
  }
}

export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.calculateBasePrice(quantity) // 50
  const discount = product.calculateDiscount(quantity) // 0
  const shippingCost = shippingMethod.calculateShippingCost(quantity, basePrice) // 15
  return basePrice - discount + shippingCost
}

// 사용 예:
const product = new Product(10, 0.1, 10)
const shippingMethod = new ShippingMethod(20, 5, 3)
const price = priceOrder(product, 5, shippingMethod)
console.log(price)
