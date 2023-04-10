import { useParams, useLocation } from "react-router-dom";

export default function ProductDetailPage() {
  let location = useLocation();
  let product = location.state;
  return (
    <>
      <h1>{product.name}</h1>
      <h3>{product.year}</h3>
      <img src={product.image} alt="" />
      <br />
      {/* {product.cast.join(" , ")} */}
    </>
  );
}