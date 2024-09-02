import { acquireReading, enrichReading } from './1-10.js'

const rawReading = acquireReading()

const reading = enrichReading(rawReading)
console.log(reading.baseCharge)
console.log(reading.taxableCharge)
