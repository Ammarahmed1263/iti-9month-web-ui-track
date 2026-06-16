import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeScreen() {
  return (
    <div className='relative grow flex flex-col items-center justify-center p-4 text-center overflow-hidden min-h-[calc(100vh-80px)]'>
      <div className='absolute inset-0 z-0 select-none pointer-events-none'>
        <Image
          src='/luxury_still_life.png'
          alt='Premium luxury still life background'
          fill
          priority
          sizes='100vw'
          className='object-cover opacity-100 dark:opacity-60 mix-blend-multiply dark:mix-blend-normal'
        />
        <div className='absolute inset-0 bg-linear-to-b from-background/30 via-background/70 to-background/90 z-1' />
      </div>

      <div className='relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 tracking-tight leading-none'>
          The Essentials Store<span className='text-primary'>.</span>
        </h1>

        <p className='text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed font-light'>
          A refined collection of premium goods. Handpicked, meticulously
          crafted, and delivered with absolute simplicity.
        </p>

        <Link
          href='/products'
          className='bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-12 rounded-none transition-all text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]'
        >
          Start Shopping
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;

export async function getServerSideProps() {
  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const initialNews = await res.json();

    return {
      props: {
        initialNews,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        initialNews: null,
      },
    };
  }
}
