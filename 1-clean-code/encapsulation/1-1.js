// Various ways for encapsulation: Closure, Object.defineProperty, Factory Function & Object.freeze, Proxy, Class
// Various ways for deep copy: lodash - cloneDeep, JSON.parse(JSON.stringify(this.#data)), ES2021 - structuredClone, recursive copy function, TypeScript - structuredClone

class Organization {
  #data
  #name
  #country
  constructor(data) {
    this.#data = data
    this.#name = data.name
    this.#country = data.country
  }

  get name() {
    return this.#name
  }
  get country() {
    return this.#country
  }

  // 방법 1:
  set name(value) {
    this.#name = value
    this.#data.name = value
  }
  get rawData() {
    return { ...this.#data } //{ ...this.#data } is a shallow copy. When you want deep copy: lodash - cloneDeep
  }
  // 방법 2:
  //   set name(value) {
  //     this.#name = value
  //   }
  //   get rawData() {
  //     return { name: this.name, country: this.country }
  //   }
}

const organization = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
})

organization.name = 'wang'
console.log(organization.name, organization.rawData) // wang, { name: 'wang', country: 'GB' }
