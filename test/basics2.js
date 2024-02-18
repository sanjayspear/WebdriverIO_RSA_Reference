module.exports = class Person {
  get location() {
    return "canada"
  }

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName() {
    console.log(this.firstName + this.lastName)
  }

}
// let name= new Person("Tim","joseph")
// // console.log(name.location)
// // name.fullName()
// //module.exports = name