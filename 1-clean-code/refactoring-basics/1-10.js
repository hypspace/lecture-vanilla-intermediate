import _ from 'lodash'

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

export function acquireReading() {
  return reading
}

export function baseRate(month, year) {
  return year === 2017 && month === 5 ? 0.1 : 0.2
}

export function enrichReading(original) {
  const result = _.cloneDeep(original)
  result.baseCharge = calculateBaseCharge(result)
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxableCharge(result.year)
  )
  return result
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month * reading.year) * reading.quantity
}
