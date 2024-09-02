export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const bestPrice = order.quantity * order.itemPrice
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
  const delivery = Math.min(order.quantity * order.itemPrice * 0.1, 100)
  return bestPrice - discount + delivery
}
