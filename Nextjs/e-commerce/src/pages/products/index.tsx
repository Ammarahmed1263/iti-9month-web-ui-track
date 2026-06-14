import Navbar from "@/components/Navbar";
import ProductDetailsScreen from "@/components/ProductDetails";
import ProductListingScreen from "@/components/ProductListing";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface ProductListingProps {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const ProductListing = (props: ProductListingProps) => {
  return <ProductListingScreen {...props} />;
};

export default ProductListing;

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=9");
  const data = await res.json();

  return {
    props: data,
  };
}

ProductListing.getLayout = function getLayout(page: ReactElement) {
  return (
    <div>
      <Navbar />
      <main>{page}</main>
    </div>
  );
};
