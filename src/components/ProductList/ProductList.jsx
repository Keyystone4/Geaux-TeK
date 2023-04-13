import './ProductList.css';
import ProductListItem from '../ProductListItem/ProductListItem';

export default function ProductList({ products, handleAddToOrder }) {
  const iProducts = products.map(product =>
    <ProductListItem
      key={product._id}
      product={product}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="ProductListItem">
      {iProducts}
    </main>
  );
}