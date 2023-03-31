const person = {
  name: "vishva",
  greet: function (greeting) {
    console.log(greeting, this.name);
  },
};

const customer = {
  name: "miral",
};
const customer2 = {
  name: "nimi",
};

// call() method
person.greet.call(customer, "Hi");

// bind() method
const greet = person.greet.bind(customer, "Hey");
//apply method
person.greet.apply(customer, ["hlw"]);

greet();
