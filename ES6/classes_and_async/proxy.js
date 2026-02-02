let emp = {};

emp = new Proxy(emp, {
  get(target, property) {
    if (property in target) {
      return target[property];
    }

    return `property ${property} is not set`;
  },
  set(target, property, value) {
    const allowed = ["name", "address", "age"];

    if (!allowed.includes(property)) {
      throw new Error(`property ${property} isn't allowed`);
    }

    if (property === "name") {
      if (typeof value !== "string" || value.length !== 7) {
        throw new Error("name must be of 7 characters");
      }
    } else if (property === "address") {
      if (typeof value !== "string") {
        throw new TypeError("address must be a string");
      }
    } else if (property === "age") {
      if (value > 60 || value < 25 || typeof value !== "number") {
        throw new RangeError("age must be between 25 and 60 (inclusive)");
      }
    } else {
      throw new ReferenceError("emp can have only name, address & age");
    }

    target[property] = value;
    return true;
  },
});


// auto generated test cases
try {
  emp.name = "ABCDEFG";
  console.log("✅ Name Test 1 Passed (Valid)");
} catch (e) {
  console.error(e.message);
}

try {
  emp.name = "Ali"; // Too short
  console.error("❌ Name Test 2 Failed (Should have thrown Error)");
} catch (e) {
  console.log("✅ Name Test 2 Passed (Caught Short Name)");
}

try {
  emp.name = [1, 2, 3, 4, 5, 6, 7]; // Array with length 7
  console.error("❌ Name Test 3 Failed (Should reject Array)");
} catch (e) {
  console.log("✅ Name Test 3 Passed (Caught Array)");
}

try {
  emp.address = "123 Main St, Cairo";
  console.log("✅ Address Test 1 Passed (Valid)");
} catch (e) {
  console.error(e.message);
}

try {
  emp.address = 100; // Number
  console.error("❌ Address Test 2 Failed");
} catch (e) {
  console.log("✅ Address Test 2 Passed (Caught Number)");
}

try {
  emp.age = 25; // Boundary Check
  console.log("✅ Age Test 1 Passed (Boundary 25 accepted)");
} catch (e) {
  console.error("❌ Age Test 1 Failed: " + e.message);
}

try {
  emp.age = 60; // Boundary Check
  console.log("✅ Age Test 2 Passed (Boundary 60 accepted)");
} catch (e) {
  console.error("❌ Age Test 2 Failed: " + e.message);
}

try {
  emp.age = 25; // Boundary Check
  console.log("✅ Age Test 1 Passed (Boundary 25 accepted)");
} catch (e) {
  console.error("❌ Age Test 1 Failed: " + e.message);
}

try {
  emp.age = 60; // Boundary Check
  console.log("✅ Age Test 2 Passed (Boundary 60 accepted)");
} catch (e) {
  console.error("❌ Age Test 2 Failed: " + e.message);
}

try {
  emp.age = 80; // Too old
  console.error("❌ Age Test 3 Failed");
} catch (e) {
  console.log("✅ Age Test 3 Passed (Caught > 60)");
}

try {
  emp.salary = 5000;
  console.error("❌ Schema Test Failed (Accepted 'salary')");
} catch (e) {
  console.log("✅ Schema Test Passed (Rejected 'salary')");
}
