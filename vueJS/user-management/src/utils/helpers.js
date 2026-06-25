export function formatPrice(price) {
  if (typeof price !== "number" || isNaN(price)) {
    return "$0.00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
}

export function getDiscountedPrice(price, discountPercentage) {
  if (!price) return 0;
  if (!discountPercentage || discountPercentage <= 0) {
    return price;
  }
  return price - (price * discountPercentage / 100);
}
