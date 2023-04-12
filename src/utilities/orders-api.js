import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addProductToCart(productId) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/cart/products/${productId}`, 'POST');
}

// Update the item's qty in the cart
// Will add the item to the order if not currently in the cart
// Sending info via the data payload instead of a long URL
export function setProductQtyInCart(productId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { productId, newQty });
}

// Updates the order's (cart's) isPaid property to true
export function checkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}