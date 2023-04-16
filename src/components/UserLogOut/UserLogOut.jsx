import './UserLogOut.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="UserLogOut">
      <div>Welcome Back, <span className='pink-text'>{user.name}</span> !</div>
      <br />
      <button className="btn pink" onClick={handleLogOut}>LOG OUT</button>
    </div>
  
  );
}