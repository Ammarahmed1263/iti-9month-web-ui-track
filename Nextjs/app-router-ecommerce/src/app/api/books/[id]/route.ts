import dbConnect from "@/lib/mongodb";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await dbConnect();
    const { id } = await params;
    const book = await Book.findById(id);

    if (!book) {
      return NextResponse.json(
        {
          message: "Book not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(
      { data: book },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log("error with get book by id:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch book",
      },
      {
        status: 400,
      },
    );
  }
}
