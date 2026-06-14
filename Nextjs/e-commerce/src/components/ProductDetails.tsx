import { ProductDetailsProp } from "@/pages/products/[id]";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function ProductDetailsScreen({ product }: ProductDetailsProp) {
  const router = useRouter();

  if (router.isFallback || !product) {
    return (
      <div className='min-h-screen flex items-center justify-center text-primary text-2xl font-semibold'>
        Loading...
      </div>
    );
  }

  const originalPrice = product.discountPercentage
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className='container mx-auto p-4 md:p-12 bg-background text-foreground min-h-screen'>
      <div className='mb-8 text-sm text-muted-foreground'>
        <Link href='/products' className='hover:text-primary transition-colors'>
          Products
        </Link>
        <span className='mx-3'>/</span>
        <span className='text-foreground font-medium'>{product.title}</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-7xl mx-auto'>
        <div className='w-full'>
          <div className='relative w-full aspect-4/5 bg-foreground/5 rounded-3xl overflow-hidden'>
            {product.thumbnail && (
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className='object-cover mix-blend-multiply dark:mix-blend-normal'
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            )}
          </div>
        </div>

        <div className='flex flex-col py-4 md:py-8'>
          <p className='text-sm font-bold text-primary uppercase tracking-widest mb-3'>
            {product.brand || product.category}
          </p>

          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight'>
            {product.title}
          </h1>

          <div className='flex items-center gap-4 mb-10'>
            <p className='text-3xl font-bold text-foreground'>
              ${product.price}
            </p>
            {originalPrice && (
              <p className='text-xl text-muted-foreground line-through'>
                ${originalPrice}
              </p>
            )}
            {product.discountPercentage > 0 && (
              <span className='text-sm font-bold text-red-600 bg-red-50 dark:bg-red-900/20 px-2.5 py-1 rounded-md'>
                {Math.round(product.discountPercentage)}% OFF
              </span>
            )}
          </div>

          <button
            type='button'
            className='w-full md:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-12 rounded-full transition-colors text-lg mb-14 shadow-lg shadow-primary/20'
          >
            Add to Cart
          </button>

          <div className='space-y-10'>
            <div>
              <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4'>
                Product Details
              </h3>
              <p className='text-foreground leading-relaxed'>
                {product.description}
              </p>
            </div>

            <div className='pt-10 border-t border-border'>
              <h3 className='text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5'>
                Specifications & Care
              </h3>
              <ul className='space-y-4 text-sm text-foreground'>
                <li className='flex gap-4'>
                  <span className='w-24 text-muted-foreground'>Status</span>
                  <span className='font-medium'>
                    {product.availabilityStatus ||
                      (product.stock > 0 ? "In Stock" : "Out of Stock")}
                  </span>
                </li>
                <li className='flex gap-4'>
                  <span className='w-24 text-muted-foreground'>SKU</span>
                  <span className='font-medium uppercase'>{product.sku}</span>
                </li>
                {product.shippingInformation && (
                  <li className='flex gap-4'>
                    <span className='w-24 text-muted-foreground'>Shipping</span>
                    <span className='font-medium'>
                      {product.shippingInformation}
                    </span>
                  </li>
                )}
                {product.returnPolicy && (
                  <li className='flex gap-4'>
                    <span className='w-24 text-muted-foreground'>Returns</span>
                    <span className='font-medium'>{product.returnPolicy}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsScreen;
