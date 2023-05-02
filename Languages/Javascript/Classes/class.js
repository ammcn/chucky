// Class
class Class {}


// Populate class body with methods
class ClassWithConstructorMethod {
  // Code written here will be interpreted harsher/strict-mode
  constructor(attributeOne, attributeTwo) {
    // Initializes object created with class
    this.attributeOne = attributeOne
    this.attributeTwo = attributeTwo
  }
}


// Lets look at real world examples
// Always needs to be defined before reference due to 'hoisting'
class DefaultCustomer {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
const joe = new DefaultCustomer('joe', 25)
console.log(joe)
//> DefaultCustomer { name: 'joe', age: 25 }


// Unnamed class expression defined as:
const Account = class {
  constructor(name, password) {
    this.name = name
    this.password = password
  }
}
console.log(Account.name)
//> Account


const invoice = class DefaultInvoice {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}
console.log(invoice.name)
//> DefaultInvoice



// methods