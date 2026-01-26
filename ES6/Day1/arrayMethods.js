var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const allStrings = fruits.every((fruit) => typeof fruit === "string");
console.log("All strings?", allStrings);

const someStartWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log("Some start with 'a'?", someStartWithA);

const filtered = fruits.filter(
  (fruit) => fruit.startsWith("b") || fruit.startsWith("s"),
);
console.log("Filtered:", filtered);

const likedFruits = fruits.map((fruit) => `I like ${fruit}`);

likedFruits.forEach((fruit) => console.log(fruit));
