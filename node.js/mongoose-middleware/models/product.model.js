import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      minlength: [2, "Product name must be at least 2 characters"],
      trim: true,
    },
    price: {
      type: Schema.Types.Double,
      required: [true, "Product price is required"],
      min: [1, "Product price must be at least 1"],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: [0, "Product quantity cannot be negative"],
    },
    category: {
      type: Schema.Types.ObjectId,
      required: [true, "Product category is required"],
      ref: "Category",
    },
  },
  { timestamps: true },
);

const Product = model("Product", productSchema);
export default Product;
