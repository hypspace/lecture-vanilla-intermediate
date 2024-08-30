import { getDefaultOwner } from './1-6.js'

const owner = getDefaultOwner()
owner.firstName = 'wang'
console.log(owner)
console.log(getDefaultOwner())
