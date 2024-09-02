import { acquireReading } from './1-9.js'

const reading = acquireReading()

const taxableCharge = reading.taxableCharge
console.log(taxableCharge) // 0.9
