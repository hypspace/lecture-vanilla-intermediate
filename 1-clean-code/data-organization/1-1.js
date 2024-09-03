// 예제 1
const perimeter = 2 * (height + width)
const area = height * width

// 예제 2
function distanceTraveled(scenario, time) {
  let result
  const primaryAcceleration = scenario.primaryForce / scenario.mass // acceleration(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay)
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime // 전파된 거리
  const secondaryTime = time - scenario.delay
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = acc * scenario.delay
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime
  }
}

// 예제 3
function discount(inputValue, quantity) {
  const result = inputValue
  if (inputValue > 50) result -= 2
  if (quantity > 100) result -= 1
  return result
}
