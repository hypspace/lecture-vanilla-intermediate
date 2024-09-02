export function printOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding(invoice)
  recordDueDate(invoice)
  printDetails(invoice, outstanding)
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((total, order) => total + order.amount, 0)
}

function printBanner() {
  console.log('***********************')
  console.log('**** Customer Owes ****')
  console.log('***********************')
}

function recordDueDate(invoice) {
  const today = new Date()
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  )
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`)
  console.log(`amount: ${outstanding}`)
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`)
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: 'wang',
}
printOwing(invoice)
