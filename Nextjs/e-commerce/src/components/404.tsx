import React from "react";
import Link from "next/link";

function NotFoundScreen() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-background'>
      <h1 className='text-4xl font-bold text-primary'>404 - Page Not Found</h1>
      <p className='text-lg text-foreground mt-2 opacity-80'>
        The page you are looking for does not exist.
      </p>
      <Link
        href='/'
        className='text-primary hover:text-primary-hover font-semibold mt-4 transition-colors'
      >
        Go back to home
      </Link>
    </div>
  );
}

export default NotFoundScreen;
