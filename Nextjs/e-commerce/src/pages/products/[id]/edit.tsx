import Navbar from "@/components/Navbar";
import ProductForm from "@/components/ProductForm";
import { Product } from "@/types/product";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function EditProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    error,
    isLoading,
  } = useSWR<Product>(id ? `/api/products/${id}` : null, fetcher);

  return (
    <div className='container mx-auto p-4 md:p-12 max-w-4xl'>
      <div className='mb-8 flex items-center gap-4'>
        <Link
          href={id ? `/products/${id}` : "/products"}
          className='text-sm text-muted-foreground hover:text-primary transition-colors'
        >
          Back to Product Details
        </Link>
      </div>
      <h1 className='text-3xl font-bold mb-8 text-center text-foreground'>
        Edit Product
      </h1>

      {isLoading ? (
        <div className='text-center py-12 text-muted-foreground'>
          Loading product data...
        </div>
      ) : error || !product ? (
        <div className='text-center py-12 text-destructive'>
          Failed to load product details.
        </div>
      ) : (
        <ProductForm initialData={product} />
      )}
    </div>
  );
}

export default EditProductPage;

EditProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <Navbar />
      <main>{page}</main>
    </div>
  );
};
