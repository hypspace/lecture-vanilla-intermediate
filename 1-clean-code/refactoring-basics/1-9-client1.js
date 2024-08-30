import { acquireReading, baseRate } from './1-9.js'

const aReading = acquireReading()

const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity
console.log(baseCharge)
