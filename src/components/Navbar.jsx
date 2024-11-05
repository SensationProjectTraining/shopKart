import { Link } from 'react-router-dom';
import { useUserContext } from '../Context/Context';

const Navbar = () => {
  const { currentUser, logout } = useUserContext();

  return (
    <div className='bg-white text-2xl text-center flex'>
      <div className='px-6'><img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/40055/image-upload/Screenshot_2022_02_16_at_9_30_14_am_copy.jpg"  width={100} height={100} alt="Logo" /></div>
      <div className='py-5 w-full'>
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
    </div>
  );
};

export default Navbar;
