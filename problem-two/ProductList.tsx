import React from "react";
import { Product } from "./types";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = React.memo(({ products }) => {
  console.log("productList Rendered");
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
});

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = React.memo(({ product }) => (
  <li>
    {product.name} - ${product.price}
  </li>
));

export default ProductList;
