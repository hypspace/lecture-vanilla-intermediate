class Account {
  constructor(number, type) {
    this._number = number
    this._type = type
  }

  get interestRate() {
    return this._type.interestRate
  }
}

class AccountType {
  #interestRate

  constructor(nameString, interestRate) {
    this._name = nameString
    this.#interestRate = interestRate
  }

  get interestRate() {
    return this.#interestRate
  }
}

const savingsAccount = new Account('123456', new AccountType('Savings', 0.03))
console.log(savingsAccount.interestRate) // 0.03
