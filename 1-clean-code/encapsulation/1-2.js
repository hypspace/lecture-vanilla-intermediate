export class Person {
  #name
  #courses
  constructor(name) {
    this.#name = name
    this.#courses = []
  }

  get name() {
    return this.#name
  }
  get courses() {
    return [...this.#courses]
  }

  addCourses(course) {
    this.#courses.push(course)
  }
  removeCourses(course) {
    const index = this.#courses.indexOf(course)
    if (index === -1) return
    this.#courses.splice(index, 1)
  }
}

export class Course {
  #name
  #isAdvanced
  constructor(name, isAdvanced) {
    this.#name = name
    this.#isAdvanced = isAdvanced
  }

  get name() {
    return this.#name
  }
  get isAdvanced() {
    return this.#isAdvanced
  }
}

const ellie = new Person('엘리')
const myCourse = new Course('리팩토링', true)
ellie.addCourses(myCourse)
ellie.removeCourses(myCourse)
console.log(ellie.courses.length) // 0
