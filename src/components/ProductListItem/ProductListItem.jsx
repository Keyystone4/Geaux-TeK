import './ProductListItem.css';

export default function ProductListItem({ product, handleAddToOrder }) {
  return (
    <div className="ProductListItem">
      <div className="emoji flex-ctr-ctr">{product.image}</div>
      <div className="name">{product.name}</div>
      <div className="buy">
        <span>${product.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(product._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}