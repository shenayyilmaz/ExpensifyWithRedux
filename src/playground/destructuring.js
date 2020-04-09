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
