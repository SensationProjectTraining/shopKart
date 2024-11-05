import { Link } from 'react-router-dom';
import { useUserContext } from '../Context/Context';

const Navbar = () => {
  const { currentUser, logout } = useUserContext();

  return (
    <div className='bg-slate-400 text-2xl text-right'>
      <Link className="px-6 hover:text-white hover:bg-blue-700" to="/">Home</Link>
      <Link className="px-6 hover:text-white hover:bg-blue-700" to="/Shopping">Shopping</Link>
      <Link className="px-6 hover:text-white hover:bg-blue-700" to="/Cart">Cart</Link>
      {currentUser ? (
        <>
          <span className="px-6">Welcome, {currentUser.username}</span>
          <button 
            onClick={() => {
              logout();
              // Optional: navigate to home or login page after logout
            }}
            className="px-6 hover:text-white hover:bg-blue-700"
          >
            Logout
          </button>
        </>
      ) : (
        <Link className="px-6 hover:text-white hover:bg-blue-700" to="/login">Login/SignUp</Link>
      )}
    </div>
  );
};

export default Navbar;
