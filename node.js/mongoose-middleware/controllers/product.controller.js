import Product from "../models/product.model.js";

async function getAllProducts(_, res, next) {
  try {
    const products = await Product.find().populate("category", "name  -_id");
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const targetId = req.params.id;
    const product = await Product.findById(targetId).populate("category", "name description");;

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
}

async function getProductsByCategory(req, res, next) {
  const { categoryId } = req.params;

  try {
    const products = await Product.find({ category: categoryId }).populate("category", "name");

    if (products.length === 0) {
      return res
        .status(404)
        .json({
          success: false,
          message: "No products found for this category",
        });
    }

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
  const { name, price, quantity, category } = req.body;

  if (!name || price === undefined || !category) {
    return res.status(400).json({ success: false, message: "Name, price, and category are required" });
  }

  try {
    const newProduct = await Product.create({
      name,
      price: parseFloat(price),
      quantity: quantity !== undefined ? parseInt(quantity, 10) : 1,
      category: category,
    });

    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    next(error);
  }
}

async function replaceProduct(req, res, next) {
  const { name, price, quantity, category } = req.body;
  const targetId = req.params.id;

  if (!name || price === undefined || quantity === undefined || !category) {
    return res.status(400).json({
      success: false,
      message: "PUT requires ALL fields: name, price, quantity, and category.",
    });
  }

  try {
    const replacedProduct = await Product.findOneAndReplace(
      { _id: targetId },
      {
        name: name,
        price: parseFloat(price),
        quantity: parseInt(quantity, 10),
        category: category,
      },
      {
        returnDocument: "after",
        runValidators: true,
      }
    ).populate("category", "name");

    if (!replacedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: replacedProduct });
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  const { name, price, quantity, category } = req.body;
  const targetId = req.params.id;

  if (!name && price === undefined && quantity === undefined && !category) {
    return res.status(400).json({
      success: false,
      message: "Name, price, quantity, or category is required to update",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      targetId,
      { $set: req.body },
      {
        returnDocument: "after",
        runValidators: true,
      }
    ).populate("category", "name");

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const targetId = req.params.id;
    const product = await Product.findByIdAndDelete(targetId);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
}

export {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};