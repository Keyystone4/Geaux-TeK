import './LineProduct.css';

export default function LineProduct({ lineProduct, isPaid, handleChangeQty }) {
  return (
    <div className='card black'>
    <div className="LineProduct">
      {/* <div className="image"><img src={lineProduct.product.image} alt=''/></div> */}
      <div className="">
        <span className="">{lineProduct.product.name}</span>
        <span>{lineProduct.product.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btnsmall"
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty - 1)}
          >−</button>
        }
        <span>{lineProduct.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineProduct.product._id, lineProduct.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${lineProduct.extPrice.toFixed(2)}</div>
    </div>
    </div>
  );
}