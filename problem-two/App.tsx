import { useState } from "react";
import AddProductForm from "./AddProductFrom";
import ProductList from "./ProductList";
import { Product } from "./types";

function App() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 3 },
  ]);

  const addProduct = (product: Omit<Product, "id">) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: prevProducts.length + 1 },
    ]);
  };

  console.log(products.length);
  return (
    <div>
      <h1>Product List</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
