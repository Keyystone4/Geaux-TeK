import { useState, useEffect } from 'react';

export default function NewOrderPage() {
  const [products, setProducts] = useState([]);
  
  useEffect(async function() {
    const products = await productsAPI.getAll();
    setProducts(products);
    
  }, []);

  return (
      <h1>New Order Page</h1>
      
  );
}