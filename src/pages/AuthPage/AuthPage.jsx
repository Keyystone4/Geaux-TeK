import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <>
      <h1>Welcome to Geaux-Tech !</h1>
      <div className='center'>
        <button className='btn pink' onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        </div>
      <br />
      <br />
      <br />
      { showSignUp ?
          <><h3 className='center'>Join Our Family:</h3><SignUpForm setUser={setUser} /></>
          :
          <><h3 className='center'>Log In and Let's get started!</h3><LoginForm setUser={setUser} /></>
      
      }
    </>
    </main>
  );
}