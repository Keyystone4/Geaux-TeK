import './ProductListItem.css';
import { Link } from 'react-router-dom'

export default function ProductListItem({ product, handleAddToOrder }) {
  return (
      <div className="ProductListItem">
        <Link to={`/products/${product.name}`} state={product}>
      <div className=""><img className='image' src={product.image} alt=''/></div>
      <div className="name">{product.name}</div>
        </Link>
        <button className="btn-sm" onClick={() => handleAddToOrder(product._id)}>
          Add To Cart
        </button>
      </div>
      
  );
 }