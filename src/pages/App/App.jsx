import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage";
import EditReviews from '../../components/EditReview/EditReviews';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    
    <main className="App">
      { user ?
          <>
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/products/:productName" element={<ProductDetailPage user={user}/>} />
              <Route path="/products/reviews/:id" element={<EditReviews user={user}/>} />

              <Route path="/*" element={<Navigate to="/orders/new" />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>

  );
}
