import dbConnect from "@/lib/mongodb";
import Product, { IProduct } from "@/models/Product";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Database connection failed" });
  }

  if (req.method === "GET") {
    try {
      const { search, sort } = req.query;

      const query: mongoose.QueryFilter<IProduct> = {};
      if (search && typeof search === "string") {
        query.title = { $regex: search, $options: "i" };
      }

      const sortOption: { [key: string]: mongoose.SortOrder } = {};

      if (sort === "price") {
        sortOption.price = 1;
      } else if (sort === "rating") {
        sortOption.rating = -1;
      }

      const products = await Product.find(query).sort(sortOption);
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to fetch products" });
    }
  } else if (req.method === "POST") {
    try {
      const product = await Product.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to create product" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
