import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';

export async function deleteReviewsRequest(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function updatedReviewsRequest(id, reviewData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', reviewData);
}

export async function getReviewsRequest(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function createReviewRequest(reviewData) {
    // const newReview = { reviewData }
    return sendRequest(BASE_URL, 'POST', reviewData);
  }