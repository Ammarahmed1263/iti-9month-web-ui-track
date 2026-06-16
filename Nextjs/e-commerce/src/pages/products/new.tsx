import Navbar from "@/components/Navbar";
import ProductForm from "@/components/ProductForm";
import Link from "next/link";
import { ReactElement } from "react";

function CreateProductPage() {
  return (
    <div className="container mx-auto p-4 md:p-12 max-w-4xl">
      <div className='mb-4'>
        <Link
          href='/products'
          className='inline-flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-primary transition-colors group'
        >
          <svg
            className='h-5 w-5 transform group-hover:-translate-x-1 transition-transform'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M10 19l-7-7m0 0l7-7m-7 7h18' />
          </svg>
          <span className='font-medium'>Back to Products</span>
        </Link>
      </div>
      <h1 className='text-3xl md:text-4xl font-serif font-medium mb-10 text-center text-foreground'>
        Add New Product
      </h1>
      <ProductForm />
    </div>
  );
}

export default CreateProductPage;

CreateProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <Navbar />
      <main>{page}</main>
    </div>
  );
};
