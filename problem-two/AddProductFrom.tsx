import { useState, ChangeEvent, FormEvent } from "react";

interface AddProductProps {
  addProduct: (product: { name: string; price: number }) => void;
}

const AddProductForm: React.FC<AddProductProps> = ({ addProduct }) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || isNaN(Number(price))) return;
    addProduct({ name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPrice(e.target.value)
        }
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
