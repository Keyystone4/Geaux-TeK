import { Link, useLocation } from "react-router-dom";
import NewReview from "../../components/NewReview/NewReview";
import Reviews from "../../components/Reviews/Reviews";
import './ProductDetailPage.css';


export default function ProductDetailPage({user}) {
  let location = useLocation();
  let product = location.state;
  return (
    <>
    <Link to="/orders/new" className="btn white">🔙</Link>
    <br />
    <div className="productDetails card pink">
      <div className="productWrap">
      <h2>{product.name}</h2>
      <br />
      <img className ='image' src={product.image} alt="" />
     
      <h3>${product.price}</h3>
      <br />
      <h3>{product.memory}</h3>
      <br />

      </div>
    <div className="black">

      <NewReview
      product={product}
      user={user} />

    </div>
      </div>
    
      <Reviews 
      product={product} />
    </>
  );
}
