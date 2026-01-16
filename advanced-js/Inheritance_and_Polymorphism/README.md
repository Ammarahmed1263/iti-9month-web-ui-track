# Inheritance and Polymorphism Projects

This folder contains JavaScript tasks focused on **prototypal inheritance**, **abstract constructors**, **encapsulation with property descriptors**, and **polymorphism via `toString()` and `valueOf()`**.

---

## Task 1: Shape / Rectangle / Square Hierarchy (`shapes.js`)

**Objective:** Implement an abstract `Shape` constructor and concrete `Rectangle` and `Square` constructors that demonstrate inheritance, encapsulation, operator overloading, and a singleton bonus.

### What it does:
- **Shape(len, wid)**
  - Acts as an **abstract base class** (cannot be instantiated directly).
  - Validates that `len` and `wid` are numbers.
  - Stores `length` and `width` in private variables and exposes them via **getter-only accessors**.
- **Rectangle(length, width)**
  - Inherits from `Shape` using prototypal inheritance.
  - Implements **singleton behavior**: only one `Rectangle` instance can exist (bonus requirement).
  - Provides:
    - `area()` → returns rectangle area.
    - `perimeter()` → returns rectangle perimeter.
    - `toString()` → returns formatted dimensions, area, and perimeter.
    - `valueOf()` → returns the area so that arithmetic works (e.g. `rect1 + rect2`).
- **Square(side)**
  - Inherits from `Rectangle` and passes `side` for both length and width.
  - Implements **singleton behavior**: only one `Square` instance can exist (bonus requirement).
  - Maintains a **class property** `Square.count` that tracks how many square objects were actually created.

### Key Concepts:
- **Abstract constructor**: `Shape` throws if instantiated directly.
- **Prototypal inheritance**: `Rectangle` → `Shape`, `Square` → `Rectangle` via `Object.create()`.
- **Encapsulation with descriptors**: `length` and `width` are defined with `get`, `enumerable: false`, `configurable: false`.
- **Immutability & protection**: dimensions can’t be changed, deleted, or iterated over.
- **Polymorphism with `valueOf()`**: arithmetic on instances uses their area:
  - `rect1 + rect2` sums areas.
  - `rect1 - rect2` subtracts areas.
- **Singleton pattern**: limits creation to **one rectangle** and **one square**.

### Test Cases / Examples:
```javascript
const rect = new Rectangle(5, 10);   // area = 50
const sqr1 = new Square(6);          // area = 36
const sqr2 = new Square(8);          // returns same instance as sqr1

rect + sqr1; // 86
rect - sqr1; // 14

console.log(rect.toString());
// "Width: 10, Length: 5, Area: 50, Perimeter: 30"
```

---

## Task 2: Vehicle Inheritance Hierarchy (`vehicles.js`)

**Objective:** Build a small class hierarchy that models different vehicles using custom constructors, enforced data types, property descriptors, and overridden `toString()` / `valueOf()`.

The hierarchy:
- `Vehicle` (base)
- `Bicycle` → `Vehicle`
- `MotorVehicle` → `Vehicle`
- `DumpTruck` → `MotorVehicle`
- `Car` → `MotorVehicle`

### What it does:
- **Vehicle(speed, color)**
  - Validates that both arguments are numbers (as required in the diagram).
  - Stores `speed` and `color` in private variables and exposes them through getters.
  - Defines common movement methods:
    - `turnLeft()`, `turnRight()`
    - `start()` → returns `true`
    - `stop()` → returns `false`
    - `goBackward(speed, accel)`
    - `goForward(speed, accel)`
  - Overrides:
    - `toString()` → basic vehicle details.
    - `valueOf()` → returns current `speed`.

- **Bicycle(speed, color)**
  - Inherits from `Vehicle`.
  - Adds `ringBell()` behavior.
  - Overrides `toString()` / `valueOf()` to reflect bicycle context.

- **MotorVehicle(speed, color, sizeOfEngine, licensePlate)**
  - Extends `Vehicle` with engine and license information.
  - Validates types (`sizeOfEngine` as number, `licensePlate` as string).
  - Exposes:
    - `getSizeOfEngine()`
    - `getLicensePlate()`
  - Overrides `toString()` / `valueOf()` (`valueOf()` uses `sizeOfEngine`).

- **DumpTruck(...)**
  - Extends `MotorVehicle` with:
    - `loadCapacity`
    - `numWheels`
    - `Weight`
  - Adds:
    - `lowerLoad()`
    - `raiseLoad()`
  - Overrides `toString()` and `valueOf()`.

- **Car(...)**
  - Extends `MotorVehicle` with:
    - `numOfDoors`
    - `numWheels`
    - `Weight`
  - Adds:
    - `switchOnAirCon()`
    - `getNumOfDoors()`
  - Overrides `toString()` and `valueOf()`.

### Key Concepts:
- **Constructor hierarchies**: Using `Function.call/apply` and `Object.create()` to chain constructors.
- **Type enforcement**: Each constructor validates arguments and throws `TypeError` on mismatch.
- **Encapsulation via closures**: All data fields are private and exposed only through getters.
- **Property descriptors**:
  - Getters are non-configurable and non-enumerable.
  - Prototype methods are defined with `Object.defineProperties()` to prevent reassignment.
- **Polymorphism**:
  - Each class customizes `toString()` to show its own details.
  - `valueOf()` returns a meaningful numeric value (speed or engine size) for arithmetic or comparisons.

### Test Cases / Examples:
```javascript
const myCar = new Car(200, 1, 2500, "ABC-123", 4, 4, 1500);

myCar.start();           // "Starting Vehicle" (returns true)
myCar.switchOnAirCon();  // "Air Conditioning On"
console.log(myCar.toString());

// Type validation example
try {
  const badBike = new Bicycle("fast", "red");
} catch (e) {
  console.log("Caught expected error:", e.message);
}
```

---

## Learning Outcomes

Through these projects, I have practiced:
- ✅ Implementing inheritance using JavaScript function constructors and prototypes
- ✅ Creating abstract base constructors and enforcing instantiation rules
- ✅ Encapsulation with closures and `Object.defineProperties()`
- ✅ Using property descriptors to control writability, enumerability, and configurability
- ✅ Overriding `toString()` and `valueOf()` for polymorphic behavior
- ✅ Implementing the singleton pattern in constructor-based designs
- ✅ Defensive programming with argument validation and typed errors

---

## How to Run

1. Open `index.html` in a browser and check the console (F12).
2. Ensure the desired script tag is enabled:
   - For shapes and rectangles: `<script src="shapes.js"></script>`
   - For vehicles hierarchy: `<script src="vehicles.js"></script>`
3. Refresh the page and inspect the console output for:
   - Inheritance checks (`instanceof` results).
   - Property protection tests (attempted modifications/deletions).
   - `toString()` and `valueOf()` demonstrations.
   - Type validation error examples.

---

## Notes

- **Non-enumerable data**: Core state properties are non-enumerable, so loops only see intended keys.
- **Immutability**: Most fields are read-only and protected from deletion to keep objects consistent.
- **UML alignment**: Method signatures and property types follow the provided class diagram and instructions.
