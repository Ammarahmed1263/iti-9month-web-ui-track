function dispVal(obj, key) {
  return obj[key];
}

const key = "age";

const val = dispVal(
  {
    nm: "ali",
    age: 10,
  },
  key
);

document.write("value of key " + key + " is " + val);
