import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';

export async function createReviewRequest(reviewData) {
    const newReview = { text: reviewData }
    return sendRequest(BASE_URL, 'POST', newReview);
  }