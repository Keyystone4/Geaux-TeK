import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
// import './NewOrderPage.css'
// import { Link } from 'react-router-dom';
// import MenuList from '../../components/MenuList/MenuList';

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