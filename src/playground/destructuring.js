//
// object destructuring
//
const person = {
  name: "shenay",
  age: 40,
  location: {
    city: "London",
    temp: 26,
  },
};

const { name = "Anonymous", age } = person;
const { city, temp: temperature } = person.location;

console.log(` ${name} is ${age}`);
console.log(` It's a ${temperature} in  ${city}`);

const book = {
  title: "coronovirus",
  aouthor: "shenay yilmaz",
  publisher: {
    //name: "penguen",
  },
};

const { name: publisherName = "self-published" } = book.publisher;

console.log("publisherName", publisherName);

//
// array destructuring
//

const address = ["hamitler mahlesi", "BURSA", "TURKEY", "0090"];

const [, city2, country] = address;

console.log(`you are in ${city} ${country}`);

const item = ["Coffee (hot)", "$2.50", , "$3.00"];

const [coffeType, , price = "no price"] = item;
console.log(`A medium ${coffeType} ${price} `);
