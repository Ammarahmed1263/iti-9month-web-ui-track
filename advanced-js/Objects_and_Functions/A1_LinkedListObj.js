const linkedList = {
  data: [],

  getValue: function (item) {
    return item.val;
  },
  find: function (val) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.getValue(this.data[i]) === val) {
        return i;
      }
    }
    return -1;
  },
  enqueue: function (val) {
    if (arguments.length !== 1) {
      throw new Error("Expected one argument exactly");
    }

    if (typeof val !== "number") {
      throw new TypeError("Value must be of type number");
    }

    let size = this.data.length;

    if (size === 0) {
      this.data.push({ val });
      return;
    }

    const first = this.getValue(this.data[0]);
    if (val > first) {
      throw new Error("Can't push element larger than current element");
    } else if (val === first) {
      throw new Error("Can't insert duplicate value");
    } else {
      this.data.unshift({ val: val });
    }
  },
  push: function (val) {
    if (arguments.length !== 1) {
      throw new Error("Expected one argument exactly");
    }

    if (typeof val !== "number") {
      throw new TypeError("Value must be of type number");
    }

    let size = this.data.length;

    if (size === 0) {
      this.data.push({ val });
      return;
    }

    if (val < this.getValue(this.data[size - 1])) {
      throw new Error("Can't push element smaller than current element");
    } else if (val === this.getValue(this.data[size - 1])) {
      throw new Error("Can't insert duplicate value");
    } else {
      this.data.push({ val: val });
    }
  },
  insert: function (idx, val) {
    if (arguments.length !== 2) {
      throw new Error("Expected two argument exactly");
    }

    if (typeof val !== "number") {
      throw new TypeError("Value must be of type number");
    }

    const size = this.data.length;

    if (size === 0) {
      this.data.push({ val });
      return;
    }

    if (idx < 0 || idx > size) {
      throw new RangeError("Index out of bounds");
    }

    if (idx > 0) {
      let prev = this.getValue(this.data[idx - 1]);
      if (val < prev) {
        throw new Error("Can't push element smaller than prior element");
      } else if (val === prev) {
        throw new Error("Can't insert duplicate value");
      }
    }

    if (idx < size) {
      let next = this.getValue(this.data[idx]);
      if (val > next) {
        throw new Error("Can't push element larger than next element");
      } else if (val === next) {
        throw new Error("Can't insert duplicate value");
      }
    }

    this.data.splice(idx, 0, { val });
  },
  dequeue: function () {
    if (!this.data.length) {
      throw new RangeError("Array is already empty");
    }

    return this.getValue(this.data.shift());
  },
  pop: function () {
    if (!this.data.length) {
      throw new RangeError("Array is already empty");
    }

    return this.getValue(this.data.pop());
  },
  remove: function (val) {
    if (arguments.length !== 1) {
      throw new Error("Expected one argument exactly");
    }

    if (!this.data.length) {
      throw new RangeError("Array is already empty");
    }

    const idx = this.find(val);
    if (idx === -1) {
      throw new RangeError("Element not found");
    }

    return this.getValue(this.data.splice(idx, 1)[0]);
  },
  display: function () {
    for (let i = 0; i < this.data.length; i++) {
      console.log("index: ", i, "value: ", this.getValue(this.data[i]));
    }
  },
};

linkedList.data = [];

console.log("Step 1: Building [-10, 0, 10, 20, 30]");

linkedList.push(10);
linkedList.push(30);
linkedList.enqueue(-10);
linkedList.insert(1, 0);
linkedList.insert(3, 20);

linkedList.display();


console.log("\nStep 2: Testing Return Values (Removal)");

const p = linkedList.pop();
console.log("Popped (Expect 30):", p);

const d = linkedList.dequeue();
console.log("Dequeued (Expect -10):", d);

const r = linkedList.remove(10);
console.log("Removed (Expect 10):", r);

console.log("\nStep 3: Final List Check (Should be [0, 20])");
linkedList.display();

// linkedList.push(-5); 

// linkedList.enqueue(100); 

// linkedList.insert(1, 50); 

// linkedList.insert(1, -5); 

// linkedList.push(20);

// linkedList.insert(0, 0);

// linkedList.push("hello");

// linkedList.push();