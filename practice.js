// import {compose, pipe} from 'lodash/fp'
// import {Map} from 'immutable'
// import {produce} from 'immer'

// let input = "    JavaScript   "
//
// const trim = str => str.trim()
// const wrap = type => str => `<${type}>${str}</${type}>`
//
// const toLowerCase = str => str.toLowerCase()
//
// const transform = pipe(trim, toLowerCase, wrap("div"))
//
// console.log(transform(input))
//
// const person = { name: "john"}
//
// const updated = Object.assign({}, person, {name: "Bob", age: 39})
//
// const spreadPerson = {
//     ...person,
//     address: {
//         ...person.address,
//         city: "New York"
//     },
//     name: "Bobby"
// }
//
// console.log(person, spreadPerson)
//
// const nums = [1,2,3]
// const index = nums.indexOf(2)
// const spliceAdded = [
//     ...nums.slice(0, index),
// 4, ...nums.slice(index)
// ]
// const added = [...nums]
//
// console.log(spliceAdded)
//
// console.log(spliceAdded.filter(n => n != 2))
//
// let book = Map({title: "Harry Potter"})
//
// function publish(book) {
//     return book.set('isPublished', true)
// }
//
// book = publish(book)
//
// console.log(book.toJS())

// let book = {title: "Harry Potter"}
//
// function publish(book) {
//     return   produce(book, draftBook => {
//         draftBook.isPublished = true;
//     })
// }
//
// let updated = publish(book)
//
// console.log(book, updated)