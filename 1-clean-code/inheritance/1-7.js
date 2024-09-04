class Person {
  #name
  constructor(name) {
    this.#name = name
  }

  get name() {
    return this.#name
  }

  get genderCode() {
    return 'X'
  }
}

class Male extends Person {
  get genderCode() {
    return 'M'
  }
}

class Female extends Person {
  get genderCode() {
    return 'F'
  }
}

function loadFromInput(data) {
  const result = []
  data.forEach(record => {
    let person
    switch (record.gender) {
      case 'M':
        person = new Male(record.name)
        break
      case 'F':
        person = new Female(record.name)
        break
      default:
        person = new Person(record.name)
    }
    result.push(person)
  })
  return result
}

const people = loadFromInput([
  { name: 'wang', gender: 'F' },
  { name: 'rice', gender: 'M' },
  { name: 'long', gender: 'M' },
])
const numberOfMales = people.filter(p => p instanceof Male).length
console.log(numberOfMales)
