class Party {
  #name
  constructor(name) {
    this.#name = name
  }
}

class Employee extends Party {
  #id
  #monthlyCost
  constructor(name, id, monthlyCost) {
    super(name)
    this.#id = id
    this.#monthlyCost = monthlyCost
  }
}

class Department extends Party {
  #staff
  constructor(name, staff) {
    super(name)
    this.#staff = staff
  }
}

const ellie = new Employee('wang', 123, 13)
const department = new Department('development', ellie)
