import Link from "next/link";
import Image from "next/image";
import { IBook } from "@/models/Book";

interface BookCardProps {
  book: IBook;
}

export default function BookCard({ book }: BookCardProps) {
  const bookId = book._id.toString();

  return (
    <Link href={`/books/${bookId}`} className='group flex flex-col h-full'>
      <div className='relative w-full aspect-4/5 bg-foreground/5 border border-border rounded-none overflow-hidden mb-4 group-hover:shadow-lg group-hover:border-primary/50 transition-all duration-300'>
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          sizes='(max-width: 768px) 100vw, (max-w-1200px) 50vw, 25vw'
          className='object-cover group-hover:scale-105 transition-transform duration-500'
        />
      </div>

      <div>
        <span className='text-[10px] font-bold tracking-widest text-primary uppercase bg-muted px-2 py-0.5 border border-border inline-block mb-2'>
          {book.genre}
        </span>
        <h2 className='text-lg font-medium text-foreground line-clamp-1 mb-1 group-hover:text-primary transition-colors duration-300'>
          {book.title}
        </h2>
        <p className='text-sm text-muted-foreground font-light mb-2'>
          by {book.author}
        </p>
        <div className='flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border/50'>
          <span>{book.pages} pages</span>
        </div>
      </div>
    </Link>
  );
}
