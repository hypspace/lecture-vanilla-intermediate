function isDisabilityIneligible(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  )
}

function disabilityAmount(employee) {
  return isDisabilityIneligible(employee) ? 0 : 1
}
