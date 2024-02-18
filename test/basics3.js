import Person from './basics2';
class Pet extends Person {
  get location() {
    return "RedCross"
  }

  constructor(firstName, lastName) {
    super(firstName, lastName)
  }


}
let name = new Pet("Tim", "joseph")
console.log(name.location)
name.fullName()
