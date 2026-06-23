import { IBook } from "@/models/Book";
import Link from "next/link";
import Image from "next/image";

async function BookDetails({ params }: { params: Promise<{ id: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/books/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className='flex h-screen items-center justify-center text-red-500'>
        Book not found.
      </div>
    );
  }

  const data = await res.json();
  const book: IBook = data.data;

  return (
    <div className='container mx-auto p-4 md:p-12 bg-background text-foreground min-h-screen'>
      <div className='mb-8 text-sm text-muted-foreground'>
        <Link href='/books' className='hover:text-primary transition-colors'>
          Archives
        </Link>
        <span className='mx-3'>/</span>
        <span className='text-foreground font-medium'>{book.title}</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-7xl mx-auto'>
        <div className='w-full'>
          <div className='relative w-full aspect-4/5 bg-foreground/5 border border-border rounded-none overflow-hidden shadow-lg'>
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className='object-cover'
              priority
              sizes='(max-w-768px) 100vw, 50vw'
            />
          </div>
        </div>

        <div className='flex flex-col py-4 md:py-8'>
          <p className='text-sm font-bold text-primary uppercase tracking-widest mb-3'>
            {book.genre}
          </p>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight font-serif'>
            {book.title}
          </h1>

          <div className='flex items-center gap-4 mb-10'>
            <p className='text-2xl font-medium text-foreground'>
              {book.pages} Pages
            </p>
            <span className='text-sm font-bold bg-muted text-muted-foreground px-2.5 py-1 border border-border'>
              Ref: {book.genre}
            </span>
          </div>

          <div className='flex flex-col xl:flex-row gap-4 items-stretch xl:items-center mb-14'>
            <button
              type='button'
              className='w-full xl:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-12 rounded-none transition-colors text-lg shadow-lg shadow-primary/20'
            >
              Request Access
            </button>
          </div>

          <div className='space-y-10'>
            <div>
              <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4'>
                Catalogue Description
              </h3>
              <p className='text-foreground leading-relaxed font-light'>
                This publication is registered in the archival repository. It
                represents an essential volume in literature or reference
                research, currently catalogued under the &quot;{book.genre}
                &quot; section.
              </p>
            </div>

            <div className='pt-10 border-t border-border'>
              <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5'>
                Specifications & Archive Details
              </h3>
              <ul className='space-y-4 text-sm text-foreground'>
                <li className='flex gap-4'>
                  <span className='w-28 text-muted-foreground'>Status</span>
                  <span className='font-medium text-green-600 dark:text-green-400'>
                    Available for Reading
                  </span>
                </li>
                <li className='flex gap-4'>
                  <span className='w-28 text-muted-foreground'>Catalog ID</span>
                  <span className='font-mono uppercase text-xs'>
                    {book._id.toString()}
                  </span>
                </li>
                <li className='flex gap-4'>
                  <span className='w-28 text-muted-foreground'>
                    Classification
                  </span>
                  <span className='font-medium'>{book.genre}</span>
                </li>
                <li className='flex gap-4'>
                  <span className='w-28 text-muted-foreground'>Author</span>
                  <span className='font-medium'>{book.author}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
