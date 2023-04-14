import * as reviewsAPI from './reviews-api';


export async function createdReview(reviewData) {
  reviewsAPI.createReviewRequest(reviewData)
}