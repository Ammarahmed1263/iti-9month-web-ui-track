function NumericSequence(start, end, step) {
  let list = [];

  if (arguments.length !== 3) {
    throw new Error("Expected 3 arguments but got " + arguments.length);
  }

  if ((end - start > 0 && step <= 0) || (end - start < 0 && step >= 0)) {
    throw new SyntaxError("steps aren't following range logic");
  }

  function createSequence(start, end, step) {
    if (step > 0) {
      for (let i = start; i <= end; i += step) list.push(i);
    } else {
      for (let i = start; i >= end; i += step) list.push(i);
    }
  }

  createSequence(start, end, step);

  this.append = function (newVal) {
    if (list.length === 0) {
      list.push(newVal);
      return;
    }

    const current = list[list.length - 1];
    const next = current + step;

    if (newVal != next || newVal === current) {
      throw new SyntaxError("new element should follow steps logic");
    }

    list.push(newVal);
  };

  this.prepend = function (newVal) {
    if (list.length === 0) {
      list.push(newVal);
      return;
    }

    const current = list[0];
    const prev = current - step;

    if (newVal != prev || newVal === current) {
      throw new SyntaxError("new element should follow steps logic");
    }

    list.unshift(newVal);
  };

  this.pop = function () {
    return list.pop();
  };

  this.dequeue = function () {
    return list.shift();
  };

  this.show = function () {
    console.log("list: ", list);
  };
}

const sequence = new NumericSequence(10, 0, -2);
console.log("--- 1. Testing Constructor Validation ---");

try {
    console.log("Test: Missing arguments...");
    new NumericSequence(0, 10);
} catch (e) {
    console.log("Caught expected error:", e.message);
}

try {
    console.log("Test: Invalid step logic (0 to 10, step -2)...");
    new NumericSequence(0, 10, -2);
} catch (e) {
    console.log("Caught expected error:", e.message);
}


console.log("\n--- 2. Testing Operations (Ascending 0 to 10, step 2) ---");
const seq = new NumericSequence(0, 10, 2);
seq.show();

try {
    console.log("Test: Append 11 (Wrong step)...");
    seq.append(11);
} catch (e) {
    console.log("Caught expected error:", e.message);
}

try {
    console.log("Test: Append 10 (Duplicate)...");
    seq.append(10);
} catch (e) {
    console.log("Caught expected error:", e.message);
}

console.log("Test: Append 12 (Valid)...");
seq.append(12);
seq.show();

try {
    console.log("Test: Prepend -1 (Wrong step)...");
    seq.prepend(-1);
} catch (e) {
    console.log("Caught expected error:", e.message);
}

console.log("Test: Prepend -2 (Valid)...");
seq.prepend(-2);
seq.show();


console.log("\n--- 3. Testing Removal & Empty List ---");


console.log("Test: Emptying the list...");
let safeGuard = 0;

while(seq.pop() !== undefined && safeGuard < 20) {
    safeGuard++;
}
seq.show();


try {
    console.log("Test: Appending 5 to empty list...");
    seq.append(5); 
    console.log("Success (If logic handles empty list)");
    seq.show();
} catch (e) {
    console.error("Failed (Crash on empty list):", e.message);
}


console.log("\n--- 4. Testing Descending Sequence ---");

try {
    console.log("Test: Creating 10 to 0 (step -2)...");
    const downSeq = new NumericSequence(10, 0, -2);
    downSeq.show();
} catch (e) {
    console.error("Failed:", e.message);
}
