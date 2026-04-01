import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";

const filePath = "./products.json";

async function readProducts() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function saveProducts(products) {
  await fs.writeFile(filePath, JSON.stringify(products, null, 2), "utf-8");
}

async function getAllProducts(req, res) {
  const products = await readProducts();
  res.status(200).json({ success: true, data: products });
}

async function getProductById(req, res) {
  const products = await readProducts();
  const targetId = req.params.id;
  const product = products.find((p) => p.id === targetId);

  if (!product) {
    res.status(404).json({ success: false, message: "Product not found" });
    return;
  }

  res.status(200).json({ success: true, data: product });
}

async function createProduct(req, res) {
  const { name, price, quantity } = req.body;

  if (!name || price === undefined) {
    res
      .status(400)
      .json({ success: false, message: "Name and price are required" });
    return;
  }

  const products = await readProducts();
  const newProduct = {
    id: uuidv4(),
    name,
    price: parseFloat(price),
    quantity: quantity !== undefined ? parseInt(quantity, 10) : 1,
  };

  products.push(newProduct);

  await saveProducts(products);
  res.status(201).json({ success: true, data: newProduct });
}

async function replaceProduct(req, res) {
  const { name, price, quantity } = req.body;
  const targetId = req.params.id;

  if (!name || price === undefined || quantity === undefined) {
    return res.status(400).json({
      success: false,
      message: "PUT requires ALL fields: name, price, and quantity.",
    });
  }

  const products = await readProducts();
  const productIndex = products.findIndex((p) => p.id === targetId);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  products[productIndex] = {
    id: targetId,
    name: name,
    price: parseFloat(price),
    quantity: parseInt(quantity, 10),
  };

  await saveProducts(products);
  res.status(200).json({ success: true, data: products[productIndex] });
}

async function updateProduct(req, res) {
  const { name, price, quantity } = req.body;
  const targetId = req.params.id;

  if (!name && price === undefined && quantity === undefined) {
    res.status(400).json({
      success: false,
      message: "Name, price, or quantity is required to update",
    });
    return;
  }

  const products = await readProducts();
  const productIndex = products.findIndex((p) => p.id === targetId);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  products[productIndex] = {
    ...products[productIndex],
    name: name || products[productIndex].name,
    price:
      price !== undefined ? parseFloat(price) : products[productIndex].price,
    quantity:
      quantity !== undefined
        ? parseInt(quantity, 10)
        : products[productIndex].quantity,
  };

  await saveProducts(products);
  res.status(200).json({ success: true, data: products[productIndex] });
}

async function deleteProduct(req, res) {
  const products = await readProducts();
  const targetId = req.params.id;

  const productIndex = products.findIndex((p) => p.id === targetId);

  if (productIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Product not found" });
  }

  const deletedProduct = products[productIndex];
  const remainingProducts = products.filter((p) => p.id !== targetId);

  await saveProducts(remainingProducts);
  res.status(200).json({ success: true, data: deletedProduct });
}

export {
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
