function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent']
  return people.find(v => candidates.includes(v)) || ''
}

console.log(foundPerson(['John'])) // John
console.log(foundPerson(['Don', 'John'])) // Don
console.log(foundPerson(['Kent', 'Don', 'John'])) // Kent
console.log(foundPerson(['Lisa', 'Don', 'Tom'])) // Don
console.log(foundPerson(['Lisa', 'Dunk', 'wang'])) // ''
