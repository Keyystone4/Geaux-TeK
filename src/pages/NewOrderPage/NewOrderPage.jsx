import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import ProductList from '../../components/ProductList/ProductList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser}) {
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();
  
  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = [...new Set(products.map(product => product.category.name))];
      setProducts(products);
      setActiveCat(categoriesRef.current[0]);
    } 
    getProducts();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(productId) {
    // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
    const updatedCart = await ordersAPI.addProductToCart(productId);
    // 2. Update the cart state with the updated cart received from the server
    setCart(updatedCart);
  }

  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setProductQtyInCart(productId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }

  return (
    
    <main className="NewOrderPage">
      <h1>Geaux-Tech</h1>
        <div className="UserLogOut">
          <UserLogOut  user={user} setUser={setUser} />
          <Link to="/orders" className="btn pink">Order History</Link>
        </div>
      
          
      <div className='CatergoryList'>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          />
      </div>
      <ProductList
        products={products.filter(product => product.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      />
      <div className='OrderDetail'>
      <OrderDetail
        order={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
      </div>
    </main>
    
  );
  
}