import { Product } from "@/types/product";
import { useRouter } from "next/router";
import React, { useActionState } from "react";
import { toast } from "sonner";

type FormState = {
  error: string | null;
};

interface Props {
  initialData?: Product;
}

function ProductForm({ initialData }: Props) {
  const router = useRouter();

  const handleFormSubmit = async (
    prevState: FormState,
    formData: FormData,
  ): Promise<FormState> => {
    try {
      const productData = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        price: Number(formData.get("price")),
        discountPercentage: Number(formData.get("discountPercentage") || 0),
        thumbnail: formData.get("thumbnail") || "https://placehold.co/400",
        brand: formData.get("brand") || "Generic",
        stock: Number(formData.get("stock") || 10),
        rating: initialData?.rating ?? 5,
        sku: initialData?.sku ?? `SKU-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
        weight: initialData?.weight ?? 1,
        warrantyInformation: initialData?.warrantyInformation ?? "1 year warranty",
        shippingInformation: initialData?.shippingInformation ?? "Ships in 1-2 business days",
        availabilityStatus: initialData?.availabilityStatus ?? "In Stock",
        returnPolicy: initialData?.returnPolicy ?? "30 days return policy",
      };
      const isEditing = !!initialData;
      const url = isEditing
        ? `/api/products/${initialData._id}`
        : "/api/products";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return { error: errorData.error || "Failed to save product" };
      }

      toast.success(isEditing ? "Product updated!" : "Product created!");
      router.push("/products");

      return { error: null };
    } catch (error) {
      console.log(error);
      return { error: "An unexpected error occurred." };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: null,
  });

  return (
    <form
      action={formAction}
      className='flex flex-col gap-6 max-w-2xl mx-auto bg-card p-8 rounded-none border border-border'
    >
      {state.error && (
        <div className='bg-red-500/10 text-red-500 p-4 rounded-none border border-red-500/20 text-sm font-medium'>
          {state.error}
        </div>
      )}

      <div className='flex flex-col gap-2'>
        <label htmlFor='title' className='text-sm font-semibold'>
          Product Title
        </label>
        <input
          type='text'
          id='title'
          name='title'
          defaultValue={initialData?.title}
          required
          className='bg-transparent border border-border p-3 rounded-none focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all duration-300'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='description' className='text-sm font-semibold'>
          Description
        </label>
        <textarea
          id='description'
          name='description'
          defaultValue={initialData?.description}
          required
          rows={4}
          className='bg-transparent border border-border p-3 rounded-none focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all duration-300'
        />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='price' className='text-sm font-semibold'>
            Price ($)
          </label>
          <input
            type='number'
            id='price'
            name='price'
            step='any'
            defaultValue={initialData?.price}
            required
            className='bg-transparent border border-border p-3 rounded-none focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all duration-300'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='discountPercentage' className='text-sm font-semibold'>
            Discount Percentage (%)
          </label>
          <input
            type='number'
            id='discountPercentage'
            name='discountPercentage'
            step='any'
            defaultValue={initialData?.discountPercentage || 0}
            className='bg-transparent border border-border p-3 rounded-none focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all duration-300'
          />
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='brand' className='text-sm font-semibold'>
            Brand
          </label>
          <input
            type='text'
            id='brand'
            name='brand'
            defaultValue={initialData?.brand || ""}
            required
            className='bg-transparent border border-border p-3 rounded-none focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all duration-300'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='stock' className='text-sm font-semibold'>
            Stock
          </label>
          <input
            type='number'
            id='stock'
            name='stock'
            defaultValue={initialData?.stock ?? 10}
            required
            className='bg-transparent border border-border p-3 rounded-none focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all duration-300'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label htmlFor='category' className='text-sm font-semibold'>
          Category
        </label>
        <input
          type='text'
          id='category'
          name='category'
          defaultValue={initialData?.category}
          required
          className='bg-transparent border border-border p-3 rounded-none focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all duration-300'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='thumbnail' className='text-sm font-semibold'>
          Image URL
        </label>
        <input
          type='url'
          id='thumbnail'
          name='thumbnail'
          defaultValue={initialData?.thumbnail}
          className='bg-transparent border border-border p-3 rounded-none focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all duration-300'
        />
      </div>

      <button
        type='submit'
        disabled={isPending}
        className='mt-4 bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 rounded-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20'
      >
        {isPending
          ? "Saving..."
          : initialData
            ? "Update Product"
            : "Create Product"}
      </button>
    </form>
  );
}

export default ProductForm;
