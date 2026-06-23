import Image from "next/image";
import Link from "next/link";

function HomeScreen() {
  return (
    <div className='min-h-[calc(100vh-80px)] bg-background text-foreground flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-12 max-w-7xl mx-auto relative overflow-hidden'>
      <div className='absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none' />

      <div className='flex-1 max-w-xl relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left'>
        <span className='text-xs font-semibold tracking-widest text-primary uppercase mb-3 px-3 py-1 border border-primary/30 rounded-none bg-primary/5 inline-block'>
          ARCHIVAL COLLECTION
        </span>

        <h1 className='text-5xl md:text-7xl font-serif font-black tracking-tight leading-none text-foreground mb-6'>
          Archival Library<span className='text-primary'>.</span>
        </h1>

        <p className='text-base md:text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-light'>
          A refined digital repository of literature, architectural journals,
          and rare prints. Handpicked and cataloged for the modern scholar.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
          <Link
            href='/books'
            className='bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-12 rounded-none transition-all text-center text-md shadow-xl shadow-primary/15 hover:scale-[1.02] active:scale-[0.98]'
          >
            Explore Archives
          </Link>
        </div>
      </div>

      <div className='flex-1 w-full max-w-xl relative z-10'>
        <div className='relative aspect-4/5 border border-border bg-card shadow-lg hover:border-primary/50 transition-all duration-500 overflow-hidden group'>
          <Image
            src='/luxury_library.png'
            alt='Luxury Minimalist Library'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
            className='object-cover group-hover:scale-102 transition-transform duration-700'
          />
          <div className='absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6'>
            <p className='text-xs tracking-wider text-foreground uppercase font-medium'>
              Reading Sanctum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
