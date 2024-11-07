import { Link } from "react-router-dom";
import { useUserContext } from "../Context/Context";
import { IoMdSearch } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import SearchBar from "./searchBar";

const Navbar = () => {
  const { currentUser, logout } = useUserContext();
  
  return (
    <div >
      <h1 className="bg-customBrown text-center text-white font-bold h-8 py-1 ">
        free shopping on Order Over $75. Free Return
      </h1>
      
      <div className="flex w-full">
        <div className="flex text-3xl gap-6 mx-10">
        <Link to="/searchBar">
        <IoMdSearch/>
        </Link>
        <Link><BiHelpCircle/></Link>
        <Link to="/Cart"><MdShoppingCart/></Link>
        </div>
        <div className="bg-white text-1xl flex justify-end w-full">
          <Link className="px-2 font-bold hover:text-white hover:bg-blue-700"
            to="/">Home</Link>
          <Link className="px-2 font-bold hover:text-white hover:bg-blue-700"
            to="/Shopping">Shopping</Link>
          <Link className="px-2 font-bold hover:text-white hover:bg-blue-700"
            to="/Cart">Cart</Link>
          <Link className="px-2 font-bold hover:text-white hover:bg-blue-700"
            to="/Contact">Contact</Link>
          {currentUser ? (
            <>
              <span className="px-2 font-bold hover:text-white uppercase hover:bg-blue-700">Welcome, {currentUser.username}</span>
              <button className="px-2 font-bold hover:text-white hover:bg-blue-700"
                onClick={() => {
                  logout();
                  // Optional: navigate to home or login page after logout
                }}
                >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="px-2 font-bold hover:text-white hover:bg-blue-700"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="px-2 font-bold hover:text-white hover:bg-blue-700"
                to="/SignUP"
              >
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="justify-center items-center bg-slate-100 flex gap-4 ">
        <h3>Men Shoes</h3>
        <h3>Women Shoes</h3>
        <h3>New Arrivals</h3>
      </div>
    </div>
  );
};

export default Navbar;