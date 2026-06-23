import mongoose, { Document, Schema } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  genre: string;
  pages: number;
  coverImage: string;
}

const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  pages: { type: Number, required: true },
  coverImage: { type: String },
});

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
