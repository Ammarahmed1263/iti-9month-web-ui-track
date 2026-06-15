import { Product } from "@/types/product";
import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Omit<Product, "_id">, Document {}

const ProductSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  brand: { type: String, required: true },
  sku: { type: String, required: true },
  weight: { type: Number, required: true },
  warrantyInformation: { type: String, required: true },
  shippingInformation: { type: String, required: true },
  availabilityStatus: { type: String, required: true },
  returnPolicy: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
