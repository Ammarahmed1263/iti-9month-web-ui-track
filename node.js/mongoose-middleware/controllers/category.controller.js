import Category from "../models/category.model.js";

async function createCategory(req, res, next) {
  const { name, description } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });
  }

  try {
    const category = new Category({ name, description });
    await category.save();
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
}

async function getCategories(req, res, next) {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    next(error);
  }
}



export { createCategory, getCategories };
