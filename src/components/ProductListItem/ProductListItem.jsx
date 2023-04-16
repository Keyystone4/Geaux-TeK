import './ProductListItem.css';
import { Link } from 'react-router-dom'

export default function ProductListItem({ product, handleAddToOrder }) {
  return (
    <>
    <div className='card-panel hoverable action center black'>
      <div className="ProductListItem">
        <Link to={`/products/${product.name}`} state={product}>
      <div className=""><img className='image' src={product.image} alt=''/></div>
      <div className="name">{product.name}</div>
        </Link>
        <br />
      </div>
        <button className="btn pink" onClick={() => handleAddToOrder(product._id)}>
          Add To Cart
        </button>
      </div>
    </>
  );
 }