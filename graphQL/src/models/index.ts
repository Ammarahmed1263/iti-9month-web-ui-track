import mongoose from "mongoose";
import { User } from "./user.js";
import { Post } from "./post.js";
import { Comment } from "./comment.js";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/graphql_lab");
    console.log("Connected to MongoDB successfully at mongodb://localhost:27017/graphql_lab");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

export { User, Post, Comment };
