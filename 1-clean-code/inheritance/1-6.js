class Employee {
  #name
  constructor(name) {
    this.#name = name
  }

  get type() {
    return 'employee'
  }

  toString() {
    return `${this.#name} (${this.type})`
  }

  static createEmployee(name) {
    switch (name) {
      case 'engineer':
        return new Engineer(name)
      case 'salesperson':
        return new Salesperson(name)
      case 'manager':
        return new Manager(name)
      default:
        throw new Error(`${arg}라는 직원 유형은 없습니다.`)
    }
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer'
  }
}

class Salesperson extends Employee {
  get type() {
    return 'salesperson'
  }
}

class Manager extends Employee {
  get type() {
    return 'manager'
  }
}

const wang = new Engineer('wang')
const long = new Manager('long')
