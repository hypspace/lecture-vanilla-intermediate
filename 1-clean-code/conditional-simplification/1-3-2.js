// 방법 1
export function adjustedCapital(instrument) {
  if (instrument.capital <= 0) return 0
  if (instrument.interestRate > 0 && instrument.duration > 0) {
    return (
      (instrument.income / instrument.duration) * instrument.adjustmentFactor
    )
  }
}

// 방법 2
export function adjustedCapital2(instrument) {
  if (!isEligibleForAdjustedCapital(instrument)) return 0
  return (instrument.income / instrument.duration) * instrument.adjustmentFactor
}

function isEligibleForAdjustedCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  )
}
