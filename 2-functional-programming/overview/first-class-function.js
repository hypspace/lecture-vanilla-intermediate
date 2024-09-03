// 함수가 이상하게도 데이터 타입과 동등한 취급을 받는다는 것

// "일급 함수란, JS에서 함수를 변수에 할당하거나, 인자로 전달하거나, 콜백으로 쓰거나 또는 반환 값으로도 사용 가능하다."

// 일급 함수 사례:
// - 변수 할당
const init = function () {}

// - 인자 전달
calculateRange(1, range())

// - 콜백 전달
document.addEventListener('click', e => onClick(e.target))

// - 반환 값
function outer() {
  return function inner() {}
}
