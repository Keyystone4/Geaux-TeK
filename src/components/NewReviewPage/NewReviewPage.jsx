import { useState } from "react";
import * as reviewsService from '../../utilities/reviews-service';



export default function NewReviewPage() {
    const [review, setReview] = useState('');
  
    function handleChange(evt) {
      setReview(evt.target.value)
    }
  
    async function handleSubmit(evt) {
      evt.preventDefault();
      reviewsService.createdReview(review);
      setReview('');
    }
  
    return (
      <>
        <h1>New Review</h1>
        <form action="" onSubmit={handleSubmit} >
          <label htmlFor="text">Text:
            <input type="text" name="text" id="text" onChange={handleChange} value={review}/>
          </label>
          <input type="submit" value="Add Review" />
        </form>
      </>
    );
  }