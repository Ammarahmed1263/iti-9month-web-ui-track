const util = {
  getSetGen: function () {
    const initial_keys = Object.keys(this).length;

    for (let i = 0; i < initial_keys; i++) {
      const key = Object.keys(this)[i];

      if (typeof this[key] != "function") {
        const prop = capitalize(key);

        Object.defineProperty(this, "get" + prop, {
          value: function () {
            return this[key];
          },
        });

        Object.defineProperty(this, "set" + prop, {
          value: function (value) {
            this[key] = value;
          },
        });
      }
    }
  },
};

const dept = { id: "SD-10", location: "SV", addr: "123 st." };

const child = {
  name: "ali",
  age: 10,
};

util.getSetGen.call(dept);
dept.setId("MN-25");
dept.setLocation("EG");
dept.setAddr("Cairo");

console.log(dept.getId());
console.log(dept.getLocation());
console.log(dept.getAddr());
console.log(dept);

util.getSetGen.call(child);
child.setName("Ammar");
child.setAge("22");

console.log(child.getName());
console.log(child.getAge());
console.log(child);

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
