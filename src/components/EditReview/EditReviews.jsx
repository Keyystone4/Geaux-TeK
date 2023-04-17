import { useState } from "react"
import * as reviewsService from '../../utilities/reviews-service';
import { useParams } from "react-router-dom";
import './EditReview.css';

export default function EditReviews() {
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
          <input className='btn pink' type="submit" value="Add Review" />
        </form>

        </div>
        <h1>Edit Review</h1>
        
        </>
    )
}