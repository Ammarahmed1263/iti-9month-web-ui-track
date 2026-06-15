import Navbar from "@/components/Navbar";
import ProductDetailsScreen from "@/components/ProductDetails";
import { ReactElement } from "react";

// export interface ProductDetailsProp {
//   product: Product;
// }

function ProductDetails() {
  return <ProductDetailsScreen />;
}

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <Navbar />
      <main>{page}</main>
    </div>
  );
};

// export async function getStaticPaths() {
//   const res = await fetch("https://dummyjson.com/products?limit=9");
//   const data = await res.json();

//   const paths = data.products
//     .map((product: { id: number }) => ({
//       params: { id: product.id.toString() },
//     }))
//     .slice(0, 3);

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const res = await fetch(`https://dummyjson.com/products/${params.id}`);
//   const product = await res.json();

//   return {
//     props: { product },
//   };
// }
