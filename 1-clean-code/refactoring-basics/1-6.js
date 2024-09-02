class Person {
  #firstName
  #lastName
  constructor(firstName, lastName) {
    this.#firstName = firstName
    this.#lastName = lastName
  }

  get firstName() {
    return this.#firstName
  }
  get lastName() {
    return this.#lastName
  }
}

let defaultOwner = new Person('shane', 'long')

export function getDefaultOwner() {
  return defaultOwner
}
