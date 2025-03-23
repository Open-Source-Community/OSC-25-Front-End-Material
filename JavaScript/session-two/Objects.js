const person = { "full name": "Alice Smith", age: 25, 1: "one" };

// console.log(person["full name"]); // "Alice Smith" (dot notation would not work)
// console.log(person[1]);           // "one" (dot notation wouldn't work with a number key)

// let key = "age";
// console.log(person[key]);         // 25 (dynamic access)


// person.email = "@email"
// console.log(person);

// delete person.email;
// console.log(person);

for (const key in person) {
  console.log("key: ", key);
    
  console.log(`${key}: ${person[key]}`);
  }