import { IBook } from "@/models/Book";
import BookCard from "@/components/BookCard";

async function BookList() {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  const res = await fetch("http://localhost:3000/api/books", {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className='flex h-screen items-center justify-center text-red-500'>
        Failed to load books.
      </div>
    );
  }

  const data = await res.json();
  const books: IBook[] = data.data || [];

  return (
    <div className='container mx-auto px-8 p-4 md:p-8 bg-background text-foreground min-h-screen'>
      <div className='border-b border-border pb-8 mb-12'>
        <h1 className='text-4xl md:text-5xl font-serif font-medium text-foreground tracking-tight'>
          Library Archives
        </h1>
        <p className='text-xs font-semibold text-primary uppercase tracking-widest mt-2'>
          Curated Volume Collection &bull; {books.length} volumes
        </p>
      </div>

      {books.length === 0 ? (
        <div className='text-center py-12 text-muted-foreground'>
          No volumes found in the archives.
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12'>
          {books.map((book) => (
            <BookCard key={book._id.toString()} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;
