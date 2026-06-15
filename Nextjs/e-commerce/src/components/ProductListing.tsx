import { useDebounce } from "@/hooks/useDebounce";
import { Product } from "@/types/product";
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

  const {
    data: products,
    error,
    isLoading,
  } = useSWR<Product[]>(apiUrl, fetcher, { keepPreviousData: true });

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
    <div className='container mx-auto p-4 md:p-8 bg-background text-foreground min-h-screen'>
      <div className='flex items-center justify-between mb-12'>
        <input
          type='text'
          value={localSearch}
          onChange={handleSearchChange}
          placeholder='Search products'
          className='border border-border rounded-md p-2'
        />
        <select
          value={sort || ""}
          onChange={handleSortChange}
          className='border border-border rounded-md p-2'
          title='Filter Options'
        >
          <option value=''>Filter</option>
          <option value='price'>Price</option>
          <option value='rating'>Rating</option>
        </select>
      </div>

      <div className='flex items-center justify-between mb-12'>
        <div>
          <h1 className='text-3xl font-bold text-foreground'>All Products</h1>
          <p className='text-muted-foreground text-base font-medium mt-1'>
            {products ? `${products.length} items` : "Loading..."}
          </p>
        </div>
        <Link
          href='/products/new'
          className='bg-primary hover:bg-primary/95 text-primary-foreground font-semibold py-3 px-6 rounded-full transition-colors text-sm shadow-md'
        >
          + Add Product
        </Link>
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
      )}
    </div>
  );
}

export default ProductListingScreen;
