"use client";
import { useEffect, useState } from "react";
import { getCartItems } from "@/lib/cart";

export default function CartPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const data = await getCartItems();
      setItems(data);
    }
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Meu Carrinho</h1>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p> - R${item.price}
        </div>
      ))}
    </div>
  );
}
