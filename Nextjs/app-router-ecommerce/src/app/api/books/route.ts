import dbConnect from "@/lib/mongodb";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const books = await Book.find();

    return NextResponse.json(
      { data: books },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log("error with get all books:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch books",
      },
      {
        status: 500,
      },
    );
  }
}

