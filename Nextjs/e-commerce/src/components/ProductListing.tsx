import { useDebounce } from "@/hooks/useDebounce";
import { Product } from "@/types/product";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function ProductListingScreen() {
  const router = useRouter();
  const { search, sort } = router.query;

  const [prevSearch, setPrevSearch] = useState(search);
  const [localSearch, setLocalSearch] = useState((search as string) || "");
  const debouncedSearch = useDebounce(localSearch, 500);

  if (search !== prevSearch) {
    setPrevSearch(search);
    setLocalSearch((search as string) || "");
  }

  useEffect(() => {
    if (!router.isReady) return;
    if (router.pathname !== "/products") return;
    if (debouncedSearch === (search || "")) return;

    const query = { ...router.query };

    if (debouncedSearch) {
      query.search = debouncedSearch;
    } else {
      delete query.search;
    }

    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
  }, [debouncedSearch, router, search]);

  const params = new URLSearchParams();
  if (search && typeof search === "string") params.append("search", search);
  if (sort && typeof sort === "string") params.append("sort", sort);
  const queryString = params.toString();
  const apiUrl = queryString ? `/api/products?${queryString}` : "/api/products";

  const { data, error, isLoading } = useSWR<Product[]>(apiUrl, fetcher, {
    keepPreviousData: true,
  });
  const { data: session } = useSession();
  console.log(session);
  const products = session ? data : data?.slice(0, 4);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const query = { ...router.query };

    if (newSort) {
      query.sort = newSort;
    } else {
      delete query.sort;
    }

    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true,
    });
  };

  return (
    <div className='container mx-auto px-8 p-4 md:p-8 bg-background text-foreground min-h-screen'>
      {/* Premium Curated Header */}
      <div className='border-b border-border pb-8 mb-12'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8'>
          <div>
            <h1 className='text-4xl md:text-5xl font-serif font-medium text-foreground tracking-tight'>
              All Products
            </h1>
            <p className='text-xs font-semibold text-primary uppercase tracking-widest mt-2'>
              Curated Collection &bull;{" "}
              {products ? `${products.length} items` : "Loading..."}
            </p>
          </div>

          {session && (
            <Link
              href='/products/new'
              className='self-start md:self-auto bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-3 px-6 rounded-none transition-colors text-sm tracking-wider uppercase shadow-lg shadow-primary/20'
            >
              + Add Product
            </Link>
          )}
        </div>

        {/* Filters & Search Row */}
        <div className='flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mt-6 pt-6 border-t border-border/50'>
          <div className='relative w-full max-w-md'>
            <input
              type='text'
              value={localSearch}
              onChange={handleSearchChange}
              placeholder='Search collection...'
              className='bg-card text-foreground border border-border rounded-none pl-4 pr-10 py-3 outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm w-full'
            />
            <span className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none'>
              <svg
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </span>
          </div>

          <div className='flex items-center gap-3'>
            <span className='text-xs font-bold text-muted-foreground uppercase tracking-wider hidden sm:inline'>
              Sort By:
            </span>
            <select
              value={sort || ""}
              onChange={handleSortChange}
              className='bg-card text-foreground border border-border rounded-none px-4 py-3 outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm cursor-pointer min-w-35'
              title='Filter Options'
            >
              <option value=''>Sort By</option>
              <option value='price'>Price</option>
              <option value='rating'>Rating</option>
            </select>
          </div>
        </div>
      </div>

      {isLoading && !products ? (
        <div className='text-center py-12 text-muted-foreground'>
          Loading products...
        </div>
      ) : error ? (
        <div className='text-center py-12 text-destructive'>
          Error: {error.message}
        </div>
      ) : !products || products.length === 0 ? (
        <div className='text-center py-12 text-muted-foreground'>
          No products found
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12'>
          {products.map((product) => (
            <Link
              href={`/products/${product._id}`}
              key={product._id}
              className='group flex flex-col'
            >
              <div className='relative w-full aspect-4/5 bg-foreground/5 rounded-none overflow-hidden mb-4'>
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
                  <div className='absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-none'>
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
      )}
      {!session && (
        <div className='mt-8 p-8 border border-border bg-card text-center rounded-none'>
          <h3 className='text-xl font-serif font-bold text-foreground mb-2'>
            Want to see more of our collection?
          </h3>
          <p className='text-muted-foreground mb-6 text-sm'>
            Log in or create an account to view all premium products.
          </p>
          <Link
            href='/auth/login'
            className='inline-block bg-primary text-primary-foreground font-bold py-2.5 px-8 rounded-none transition-colors hover:bg-primary/90 text-sm'
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProductListingScreen;
