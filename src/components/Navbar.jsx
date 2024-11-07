import { Link } from "react-router-dom";
import { useUserContext } from "../Context/Context";
import { IoMdSearch } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import SearchBar from "./searchBar";

const Navbar = () => {
  const { currentUser, logout } = useUserContext();

  return (
    <div>
      <h1 className="bg-customBrown text-center text-white font-bold h-8 py-1 ">
        free shopping on Order Over $75. Free Return
      </h1>

      <div className="flex w-full px-5">
        {currentUser ? (
          <span className="font-bold flex uppercase text-left px-4">
            Welcome,{currentUser?.username}
          </span>
        ) : (
          <></>
        )}

        <div className="bg-white text-1xl flex justify-end w-full">
          <Link
            className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
            to="/"
          >
            Home
          </Link>
          <Link
            className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
            to="/Shopping"
          >
            Shopping
          </Link>
          <Link
            className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
            to="/Cart"
          >
            Cart
          </Link>
          <Link
            className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
            to="/Contact"
          >
            Contact
          </Link>
          {currentUser ? (
            <>
              <button
                className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl "
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
                className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                to="/SignUP"
              >
                SignUp
              </Link>
            </>
          )}
          <div className="flex text-2xl gap-2">
            <Link to="/searchBar">
              <IoMdSearch className="hover:text-white hover:bg-orange-500 hover:rounded-3xl " />
            </Link>
            <Link>
              <BiHelpCircle className="hover:text-white hover:bg-orange-500 hover:rounded-3xl" />
            </Link>
            <Link to="/Cart">
              <MdShoppingCart className="hover:text-white hover:bg-orange-500 hover:rounded-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
