import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
