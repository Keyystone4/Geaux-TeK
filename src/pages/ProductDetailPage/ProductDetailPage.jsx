import { useLocation } from "react-router-dom";
import NewReviewPage from "../../components/NewReviewPage/NewReviewPage";


export default function ProductDetailPage() {
  let location = useLocation();
  let product = location.state;
  return (
    <>
      <h2>{product.name}</h2>
      <img className ='image' src={product.image} alt="" />
      <h3>{product.price}</h3>
      <h3>{product.memory}</h3>
      <br />
      {/* {product.cast.join(" , ")} */}
      <NewReviewPage />
    </>
  );
}
