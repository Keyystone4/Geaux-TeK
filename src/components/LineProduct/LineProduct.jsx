import './LineProduct.css';

export default function LineProduct({ lineProduct, isPaid, handleChangeQty }) {
  return (
    <div className='card action center'>
    <div className="LineProduct">
      {/* <div className="image"><img src={lineProduct.product.image} alt=''/></div> */}
      <div className="price">
      <div className=""><img className='image' src={lineProduct.product.image} alt=''/></div>
      <span className="">{lineProduct.product.name}</span>
      <br />
        <span>{lineProduct.product.price.toFixed(2)}</span>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        <br />
        {!isPaid &&
          <button
            className=""
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty - 1)}
          >−</button>
        }
        <span>{lineProduct.qty}</span>
        {!isPaid &&
          <button
            className=""
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineProduct.extPrice.toFixed(2)}</div>
      </div>
      <br />
    </div>
    </div>
  );
}