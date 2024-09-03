// 함수형 프로그래밍의 핵심, 모듈화 수준을 높히는 것

// "순수 함수란, 리턴 값 이외에 다른 외부 상태를 변경하는 코드가 있다면 이는 순수 함수가 아니다."

// 순수 함수인 사례
function add(a, b) {
  return a + b
}
add(1, 2) // 3
add(1, 3) // 4
add(1, 4) // 5

// 순수 함수가 아닌 사례 - 동일한 인자를 넣었지만, 참조하는 c-변수가 변경될 수 있고 이에 결과 값이 변경될 수 있다면 이는 순수 함수가 아님
let c = 1
function add2(a, b) {
  return a + b + c
}
add2(1, 2) // 4
add2(1, 3) // 5
c = 100
add2(1, 4) // 105

// 순수 함수가 아닌 사례2: 부수 효과가 있는 함수 - 리턴 값 이외에 다른 외부의 상태를 변경하는 코드가 있다면 이는 순수 함수가 아님
let cc = 20
function add3(a, b) {
  cc = b
  return a + b
}
cc // 20
add3(1, null)
cc // null

// 순수 함수를 만드는 사례: 외부의 상태를 변경하지 않고 그대로 리턴(불변 객체 만들기)

// - 전
const obj = { code: 10 }
function add4(obj, b) {
  obj.code += b
  return obj
}
add4(obj, 1)
obj // { code: 11 }

// - 후
const obj2 = { code: 10 }
function add5(obj, b) {
  return { code: obj.code + b }
}
add5(obj2, 1)
obj2 // { code: 10 }
