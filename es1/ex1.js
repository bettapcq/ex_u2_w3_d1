class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  whoIsOlder = function (otherUser) {
    let older = '';
    let younger = '';
    if (this.age > otherUser.age) {
      older = this.firstName;
      younger = otherUser.firstName;
    } else {
      older = otherUser.firstName;
      younger = this.firstName;
    }
    return `${older} is older than ${younger}`;
  };
}

const person1 = new User('betta', 'piac', 33, 'turin');

const person2 = new User('tizio', 'caio', 24, 'milan');

const person3 = new User('cico', 'loco', 42, 'naples');

console.log(person1);
console.log(person2);
console.log(person3);

console.log(person1.whoIsOlder(person2));

console.log(person1.whoIsOlder(person3));

console.log(person2.whoIsOlder(person3));
