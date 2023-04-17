import { useState, useEffect } from "react"
import * as reviewsService from '../../utilities/reviews-service';
import { useParams } from "react-router-dom";
import './EditReview.css';

export default function EditReviews({ user }) {
  const [reviewOwner, setReviewOwner] = useState('');
    const [formData, setFormData] = useState({
        text: '',
    });
    let {id} = useParams()
    function handleChange(evt) {

        setFormData({...formData, [evt.target.name] : evt.target.value})
      }
    
      async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedReview = await reviewsService.updatedReview(id, formData);
        setFormData(updatedReview);
      }

      useEffect(function() {
        async function getReview() {
          const review = await reviewsService.findOneReview(id)
          setReviewOwner(review[0].user)
          console.log(user)
        }
        getReview();
      }, []);

      let disable = reviewOwner === user._id ? false : true
    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex container action center">

        <form action="" onSubmit={handleSubmit} >
          <label htmlFor="text">Text:
            <input type="text" name="text" id="text" onChange={handleChange} value={formData.text}/>
          </label>
          <input className='btn pink' type="submit" value="Edit Review" disabled={disable} />
        </form>

        </div>
        <h1>Edit Review</h1>
        
        </>
    )
}