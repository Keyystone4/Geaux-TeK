import { useState } from "react";
import * as reviewsService from '../../utilities/reviews-service';
import './NewReview.css';




export default function NewReviewPage({product}) {
    const [review, setReview] = useState({
      text: '',
      product: product._id
    });
  
    function handleChange(evt) {

      setReview({...review, [evt.target.name] : evt.target.value})
    }
  
    async function handleSubmit(evt) {
      evt.preventDefault();
      const createdReview = await reviewsService.createdReview(review);
      setReview(createdReview);
    }
  
    return (
      <>
     
        
      <div className="flex container container ">

        <h1>New Review</h1>
        <form action="" onSubmit={handleSubmit} >
          <label htmlFor="text">Text:
            <input className="input-field" type="text" name="text" id="text" onChange={handleChange} value={review.text}/>
          </label>
          <input className="btn pink " type="submit" value="Submit Review" />
          
        </form>

      </div>
      </>
    );
  }