function Vehicle(speed, color) {
  if (typeof speed != "number" || typeof color != "number") {
    throw new TypeError("Invalid parameter types for Vehicle constructor");
  }

  let _speed = speed;
  let _color = color;
  Object.defineProperties(this, {
    speed: {
      get() {
        return _speed;
      },
      enumerable: false,
      configurable: false,
    },
    color: {
      get() {
        return _color;
      },
      enumerable: false,
      configurable: false,
    },
  });
}

Object.defineProperties(Vehicle.prototype, {
  turnLeft: {
    value: function () {
      console.log("Turning Left");
      return undefined;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  },
  turnRight: {
    value: function () {
      console.log("Turning Right");
      return undefined;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  },
  start: {
    value: function () {
      console.log("Starting Vehicle");
      return true;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  },
  stop: {
    value: function () {
      console.log("Stopping Vehicle");
      return false;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  },
  goBackward: {
    value: function (speed, acceleration) {
      console.log(
        "Going Backward: " + speed + ", Acceleration: " + acceleration
      );
      return undefined;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  },
  goForward: {
    value: function (speed, acceleration) {
      console.log(
        "Going Forward: " + speed + ", Acceleration: " + acceleration
      );
      return undefined;
    },
    writable: false,
    configurable: false,
    enumerable: false,
  },
  toString: {
    value: function () {
      return (
        "Vehicle Details: " + " Speed: " + this.speed + ", Color: " + this.color
      );
    },
  },
  valueOf: {
    value: function () {
      return this.speed;
    },
  },
});

function Bicycle(speed, color) {
  if (typeof speed != "number" || typeof color != "number") {
    throw new TypeError("Invalid parameter types for Bicycle constructor");
  }
  Vehicle.apply(this, [speed, color]);
}

Bicycle.prototype = Object.create(Vehicle.prototype, {
  constructor: {
    value: Bicycle,
    enumerable: false,
    configurable: true,
    writable: true,
  },
});

Object.defineProperties(Bicycle.prototype, {
  ringBell: {
    value: function () {
      return undefined;
    },
    enumerable: false,
    configurable: false,
    writable: false,
  },
  toString: {
    value: function () {
      return (
        "Bicycle Details: " + " Speed: " + this.speed + ", Color: " + this.color
      );
    },
  },
  valueOf: {
    value: function () {
      return this.speed;
    },
  },
});

function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  if (
    typeof speed != "number" ||
    typeof color != "number" ||
    typeof sizeOfEngine != "number" ||
    typeof licensePlate != "string"
  ) {
    throw new TypeError("Invalid parameter types for MotorVehicle constructor");
  }
  Vehicle.apply(this, [speed, color]);

  let _sizeOfEngine = sizeOfEngine;
  let _licensePlate = licensePlate;
  Object.defineProperties(this, {
    sizeOfEngine: {
      get() {
        return _sizeOfEngine;
      },
      enumerable: false,
      configurable: false,
    },
    licensePlate: {
      get() {
        return _licensePlate;
      },
      enumerable: false,
      configurable: false,
    },
  });
}

MotorVehicle.prototype = Object.create(Vehicle.prototype, {
  constructor: {
    value: MotorVehicle,
    enumerable: false,
    configurable: true,
    writable: true,
  },
});

Object.defineProperties(MotorVehicle.prototype, {
  getSizeOfEngine: {
    value: function () {
      return this.sizeOfEngine;
    },
  },
  getLicensePlate: {
    value: function () {
      return this.licensePlate;
    },
  },
  toString: {
    value: function () {
      return (
        "MotorVehicle Details: " +
        " Speed: " +
        this.speed +
        ", Color: " +
        this.color +
        ", Engine Size: " +
        this.sizeOfEngine +
        ", License Plate: " +
        this.licensePlate
      );
    },
  },
  valueOf: {
    value: function () {
      return this.sizeOfEngine;
    },
  },
});

function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  loadCapacity,
  numWheels,
  Weight
) {
  if (
    typeof speed != "number" ||
    typeof color != "number" ||
    typeof sizeOfEngine != "number" ||
    typeof licensePlate != "string" ||
    typeof loadCapacity != "number" ||
    typeof numWheels != "number" ||
    typeof Weight != "number"
  ) {
    throw new TypeError("Invalid parameter types for DumpTruck constructor");
  }
  MotorVehicle.apply(this, [speed, color, sizeOfEngine, licensePlate]);

  let _loadCapacity = loadCapacity;
  let _numWheels = numWheels;
  let _Weight = Weight;

  Object.defineProperties(this, {
    loadCapacity: {
      get() {
        return _loadCapacity;
      },
      enumerable: false,
      configurable: false,
    },
    numWheels: {
      get() {
        return _numWheels;
      },
      enumerable: false,
      configurable: false,
    },
    Weight: {
      get() {
        return _Weight;
      },
      enumerable: false,
      configurable: false,
    },
  });
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype, {
  constructor: {
    value: DumpTruck,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Object.defineProperties(DumpTruck.prototype, {
  lowerLoad: {
    value: function () {
      console.log("lower load");
      return undefined;
    },
  },
  raiseLoad: {
    value: function () {
      console.log("raise load");
      return undefined;
    },
  },
  toString: {
    value: function () {
      return (
        "DumpTruck Details: " +
        " Speed: " +
        this.speed +
        ", Color: " +
        this.color +
        ", Engine Size: " +
        this.sizeOfEngine +
        ", License Plate: " +
        this.licensePlate +
        ", Load Capacity: " +
        this.loadCapacity +
        ", Number of Wheels: " +
        this.numWheels +
        ", Weight: " +
        this.Weight
      );
    },
  },
  valueOf: {
    value: function () {
      return this.speed;
    },
  },
});

function Car(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  numOfDoors,
  numWheels,
  Weight
) {
  if (
    typeof speed != "number" ||
    typeof color != "number" ||
    typeof sizeOfEngine != "number" ||
    typeof licensePlate != "string" ||
    typeof numOfDoors != "number" ||
    typeof numWheels != "number" ||
    typeof Weight != "number"
  ) {
    throw new TypeError("Invalid parameter types for Car constructor");
  }

  MotorVehicle.apply(this, [speed, color, sizeOfEngine, licensePlate]);

  let _numOfDoors = numOfDoors;
  let _numWheels = numWheels;
  let _Weight = Weight;

  Object.defineProperties(this, {
    numOfDoors: {
      get() {
        return _numOfDoors;
      },
      enumerable: false,
      configurable: false,
    },
    numWheels: {
      get() {
        return _numWheels;
      },
      enumerable: false,
      configurable: false,
    },
    Weight: {
      get() {
        return _Weight;
      },
      enumerable: false,
      configurable: false,
    },
  });
}

Car.prototype = Object.create(MotorVehicle.prototype, {
  constructor: {
    value: Car,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Object.defineProperties(Car.prototype, {
  switchOnAirCon: {
    value: function () {
      console.log("Air Conditioning On");
      return undefined;
    },
  },
  getNumOfDoors: {
    value: function () {
      return this.numOfDoors;
    },
  },
  toString: {
    value: function () {
      return (
        "Car Details: " +
        " Speed: " +
        this.speed +
        ", Color: " +
        this.color +
        ", Engine Size: " +
        this.sizeOfEngine +
        ", License Plate: " +
        this.licensePlate +
        ", Number of Doors: " +
        this.numOfDoors +
        ", Number of Wheels: " +
        this.numWheels +
        ", Weight: " +
        this.Weight
      );
    },
  },
  valueOf: {
    value: function () {
      return this.sizeOfEngine;
    },
  },
});






console.log("--- 1. Inheritance Check ---");
const myCar = new Car(200, 1, 2500, "ABC-123", 4, 4, 1500);
console.log("Is Car a MotorVehicle?", myCar instanceof MotorVehicle); // true
console.log("Is Car a Vehicle?", myCar instanceof Vehicle); // true

console.log("\n--- 2. Privacy & Descriptor Check ---");
myCar.speed = 500; // Attempt modification
console.log("Speed after change (should be 200):", myCar.speed); // 200

delete myCar.licensePlate; // Attempt deletion
console.log(
  "License Plate after delete (should still exist):",
  myCar.licensePlate
); // "ABC-123"

console.log("Is speed enumerable?", myCar.propertyIsEnumerable("speed")); // false

console.log("\n--- 3. Functionality Check ---");
myCar.start(); // "Starting Vehicle"
myCar.switchOnAirCon(); // "Air Conditioning On"
console.log(myCar.toString());

console.log("\n--- 4. Type Validation Check ---");
try {
  const badBike = new Bicycle("fast", "red"); // Should fail (strings instead of numbers)
} catch (e) {
  console.log("Caught expected error:", e.message);
}
