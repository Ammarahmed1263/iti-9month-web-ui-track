import Navbar from "@/components/Navbar";
import ProductForm from "@/components/ProductForm";
import Link from "next/link";
import { ReactElement } from "react";

function CreateProductPage() {
  return (
    <div className="container mx-auto p-4 md:p-12 max-w-4xl">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
         Back to Products
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center text-foreground">Add New Product</h1>
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
