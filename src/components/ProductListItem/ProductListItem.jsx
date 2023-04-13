import './ProductListItem.css';

export default function ProductListItem({ product, handleAddToOrder }) {
  return (
    <div className="ProductListItem">
      <div className=""><img className='image' src={product.image} alt=''/></div>
      <div className="name">{product.name}</div>
      
        <button className="btn-sm" onClick={() => handleAddToOrder(product._id)}>
          Add To Cart
        </button>
      </div>
  );
 }