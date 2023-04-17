import { useState, useEffect } from "react";
import * as ordersAPI from '../../utilities/orders-api';
import { Link } from 'react-router-dom';


export default function OrderHistoryPage() {
  const [cart, setCart] = useState([]);

  useEffect(function() {
    async function getOrderHistory() {
      const orderHistory = await ordersAPI.getOrderHistory();
      setCart(orderHistory);
    }
    getOrderHistory();
  }, [])
  return (
    <>
    <Link to="/orders/new" className="btn pink">Create New Order</Link>
      <h1>Order History Page</h1>
    <div className="orderHistory flex container center white">

      {cart.map(order =>{
        return <h3>Order Id: {order._id}</h3>
      })}

    </div>
    </>
  );
}