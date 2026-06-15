import Link from "next/link";
import React from "react";

function HomeScreen() {
  return (
    <div className='grow flex flex-col items-center justify-center bg-background font-sans p-4 text-center'>
      <h1 className='text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight'>
        The Essentials Store.
      </h1>

      <p className='text-xl text-muted-foreground mb-10 max-w-2xl'>
        Everything you need, fetched instantly. Experience the speed of Next.js
        static generation.
      </p>

      <Link
        href='/products'
        className='bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-4 px-10 rounded-full transition-all text-lg shadow-lg shadow-primary/30'
      >
        Start Shopping
      </Link>
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
