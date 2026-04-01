const fs = require("node:fs");

const filePath = "./products.json";

function readProducts() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") { // file not found or no access rights
        // here i check while reading to log only
      console.log("No products file found. Starting with an empty list.");
    } else {
      console.log("Error parsing products data. Starting fresh.");
    }
    return [];
  }
}

function saveProducts(products) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), "utf-8"); // 2 for two spaces
    // write file sync creates file automatically if not found
} catch (error) {
    console.error("Failed to save products:", error.message);
  }
}

function getIncrementalId(products) {
  if (products.length === 0) {
    return 1;
  }

  const ids = products.map((p) => p.id);
  return Math.max(...ids) + 1;

  // here i check for highest index in the array and increment it by 1
  // to get next index
}

function addProduct(name, price) {
  const products = readProducts();
  const id = getIncrementalId(products);

  products.push({
    id,
    name,
    price: parseFloat(price),
  });

  saveProducts(products);
}

function updateProduct(id, options) {
  const products = readProducts();
  const targetId = Number(id);

  const productIndex = products.findIndex((p) => p.id == targetId);

  if (productIndex === -1) {
    console.log(`Product with ID ${targetId} not found.`);
    return;
  }

  if (options.includes("--name") || options.includes("--price")) {
    const nameIndex = options.indexOf("--name");
    if (nameIndex !== -1) {
      products[productIndex].name = options[nameIndex + 1];
    }

    const priceIndex = options.indexOf("--price");
    if (priceIndex !== -1) {
      products[productIndex].price = parseFloat(options[priceIndex + 1]);
    }

    // this way i can handle each flag separately so user can send only one flag
    // or flags with reversed order
  } else {
    products[productIndex].name = options[0];
  }

  saveProducts(products);
}

function listProducts() {
  if (readProducts().length === 0) {
    console.log("No products found.");
    return;
  }
  console.table(readProducts());
}

function deleteProduct(id) {
  const products = readProducts();

  const remainingProducts = products.filter((p) => p.id !== Number(id));

  if (products.length === remainingProducts.length) {
    console.log(`Product with ID ${id} not found.`);
    return;
  }

  saveProducts(remainingProducts);
}

const [command, ...args] = process.argv.slice(2); // remove node index.js
console.log("args here: ", command, args);

switch (command) {
  case "add": {
    const name = args[0];
    const price = parseFloat(args[1]);

    addProduct(name, price);
    console.log(`successfully added ${name}`);
    break;
}
case "list": {
    listProducts();
    break;
}
case "update": {
    const options = args.slice(1);
    updateProduct(args[0], options);
    console.log(`updated product ${args[0]}`);
    break;
}
case "delete": {
    deleteProduct(args[0]);
    console.log(`deleted product ${args[0]}`);
    break;
  }
  default: {
    console.log("Unknown command. Use 'add', 'list', 'update', or 'delete'.");
  }
}
