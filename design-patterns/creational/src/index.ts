import Counter from "./counter.js";

const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();

counter1.addInstance();
counter2.addInstance();

console.log(counter1.getCount());
console.log(counter1 === counter2);

console.log(
  "------------------------------------------------------------------------------------",
);

import Document from "./documentClone.js";

const originalDoc = new Document(
  "Report",
  "Page 2",
  5,
  "Introduction to patterns",
);

const copiedDoc = originalDoc.clone();
copiedDoc.header = "Report - Copy";

originalDoc.printInfo();
copiedDoc.printInfo();

console.log(
  "------------------------------------------------------------------------------------",
);

import { MargheritaChef, PepperoniChef, Waiter } from "./pizzaBuilder.js";

const waiter = new Waiter();
const margheritaChef = new MargheritaChef();
const pepChef = new PepperoniChef();

waiter.makeMargherita(margheritaChef);
const myPizza = margheritaChef.getPizza();
myPizza.serve();

waiter.makePepperoni(pepChef);
const myPepperoniPizza = pepChef.getPizza();
myPepperoniPizza.serve();

console.log(
  "------------------------------------------------------------------------------------",
);

import {
  ModernFurnitureFactory,
  VictorianFurnitureFactory,
} from "./furnitureFactory.js";

const modernFactory = new ModernFurnitureFactory();
const victorianFactory = new VictorianFurnitureFactory();

const modernChair = modernFactory.createChair();
const modernTable = modernFactory.createTable();
const victorianChair = victorianFactory.createChair();
const victorianTable = victorianFactory.createTable();

modernChair.sitOn();
modernTable.use();
victorianChair.sitOn();
victorianTable.use();
