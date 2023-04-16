import { useLocation } from "react-router-dom";
import NewReview from "../../components/NewReview/NewReview";
import Reviews from "../../components/Reviews/Reviews";


export default function ProductDetailPage({user}) {
  let location = useLocation();
  let product = location.state;
  return (
    <>
    <div className="productDetails">
      <h2>{product.name}</h2>
      <img className ='image' src={product.image} alt="" />
      <h3>{product.price}</h3>
      <h3>{product.memory}</h3>
      <br />
      </div>
      <NewReview
      product={product}
      user={user} />
      <Reviews 
      product={product} />
    </>
  );
}
