import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ProductListingProps } from "@/pages/products";

function ProductListingScreen({ products }: ProductListingProps) {
  return (
    <div className='container mx-auto p-4 md:p-8 bg-background text-foreground min-h-screen'>
      <div className='flex items-center justify-between mb-12'>
        <h1 className='text-3xl font-bold text-foreground'>All Products</h1>
        <p className='text-muted-foreground text-sm font-medium'>
          {products.length} items
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12'>
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className='group flex flex-col'
          >
            <div className='relative w-full aspect-4/5 bg-foreground/5 rounded-2xl overflow-hidden mb-4'>
              {product.thumbnail && (
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                  className='object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal'
                />
              )}
              {product.discountPercentage > 0 && (
                <div className='absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md'>
                  -{Math.round(product.discountPercentage)}%
                </div>
              )}
            </div>

            <div>
              <h2 className='text-lg font-medium text-foreground line-clamp-1 mb-1'>
                {product.title}
              </h2>
              <p className='text-sm text-muted-foreground capitalize mb-2 line-clamp-1'>
                {product.category}
              </p>
              <div className='flex items-center gap-3'>
                <span className='text-lg font-semibold text-foreground'>
                  ${product.price}
                </span>
                {product.discountPercentage > 0 && (
                  <span className='text-sm text-muted-foreground line-through'>
                    $
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListingScreen;
