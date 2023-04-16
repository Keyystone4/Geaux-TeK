import './OrderDetail.css';
import LineProduct from '../LineProduct/LineProduct';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineProducts = order.lineProducts.map(product =>
    <LineProduct
      lineProduct={product}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={product._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className='card black'>
      <div className="">
        {lineProducts.length ?
          <>
            {lineProducts}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn pink"
                  onClick={handleCheckout}
                  disabled={!lineProducts.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="Empty-cart">Cart is Empty</div>
        }
      </div>
    </div>
    </div>
  );
}