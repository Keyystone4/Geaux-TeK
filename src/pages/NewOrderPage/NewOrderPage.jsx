import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';

export default function NewOrderPage() {
  const [products, setProducts] = useState([]);
  const categoriesRef = useRef([]);
  
  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = [...new Set(products.map(product => product.category.name))];
      setProducts(products);
    } 
    getProducts();
  }, []);

  return (
      <h1>New Order Page</h1>
      
  );
}