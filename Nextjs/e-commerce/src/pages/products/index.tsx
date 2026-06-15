import Navbar from "@/components/Navbar";
import ProductListingScreen from "@/components/ProductListing";
import { ReactElement } from "react";


// export interface ProductListingProps {
//   products: Product[];
//   total: number;
//   skip: number;
//   limit: number;
// }

const ProductListing = () => {
  return <ProductListingScreen />;
};

export default ProductListing;

// export async function getStaticProps() {
//   const res = await fetch("https://dummyjson.com/products?limit=9");
//   const data = await res.json();

//   return {
//     props: data,
//   };
// }

ProductListing.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <Navbar />
      <main>{page}</main>
    </div>
  );
};
