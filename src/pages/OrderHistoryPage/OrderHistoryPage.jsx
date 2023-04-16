import OrderDetail from "../../components/OrderDetail/OrderDetail";
import { useState, useEffect } from "react";
import * as ordersAPI from '../../utilities/orders-api';


export default function OrderHistoryPage() {
  const [cart, setCart] = useState([]);

  useEffect(function() {
    async function getOrderHistory() {
      const orderHistory = await ordersAPI.getOrderHistory();
      console.log(orderHistory);
      setCart(orderHistory);
    }
    getOrderHistory();
  }, [])
  return (
    <>
      <h1>Order History Page</h1>
      {cart.map(order =>{
        return <h3>{order._id}</h3>
      })}
    </>
  );
}