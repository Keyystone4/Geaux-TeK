import { useState, useEffect } from "react";
import * as reviewsService from '../../utilities/reviews-service';
import { Link } from 'react-router-dom';



export default function Reviews({ product }) {
    const [reviews, setReviews] = useState([]);

    useEffect(function() {
        async function getReviews() {
            const reviews = await reviewsService.getAllReviews(product._id);
            setReviews(reviews);
        }
        getReviews();
    }, []);

    async function deleteReview(id) {
      const deletedReview = await reviewsService.deleteOneReview(id);
      

    }

  return (
    <>
      <h1>Reviews Page</h1>

      { reviews ?
        reviews.map(review =>
           <div>
            <h4>{review.text}</h4> 
         <Link to ={`/products/reviews/${review._id}`}>
         <button>Edit</button>
         </Link> 
         <button onClick={()=> deleteReview(review._id)}>Delete</button>
            </div>
        )
        :
        <h3>No Notes Yet!</h3>
      }
    </>
    
  );
}