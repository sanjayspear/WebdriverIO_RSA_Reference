
import { location, fullName } from './basics2'

console.log(location)
fullName()
let greet = "mrning"

if (1 == 1) {
  let greet = "evening"

}
greet = "hello"

function add(a, b) {
  var greet = "mrning"

  return a + b
}
console.log(add(2, 3))
console.log(greet)
//console.log(greeting)




let b = function (a, c) {
  return a + c
}
console.log(b(2, 3))

let sum = (a, c) => a + c;
console.log(sum(2, 3))

let day = 'tuesday '
console.log(day.length)
let subday = day.slice(0, 3)
console.log(subday)
console.log(day[1])
breakDays = day.split("s")
console.log(breakDays[1].trim())

let date = "23"
let nextdate = "27"
let diff = parseInt(nextdate) - parseInt(date)
console.log(diff)
console.log(diff.toString())
let newQuote = day + "is Funday"
console.log(newQuote)
let count = 0
let val = newQuote.indexOf("day")
while (val !== -1) {
  count++
  val = newQuote.indexOf("day", val + 1)
}
console.log(count)













