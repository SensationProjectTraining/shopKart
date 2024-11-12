import { Link } from "react-router-dom";
import { useUserContext } from "../Context/Context";
import { IoMdSearch } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import FAQ from "./Pages/FAQ";

const Navbar = () => {
  const { currentUser, logout } = useUserContext();

  function SearchClick() {
    alert("SearchBox is Active");
  }

  return (
    <div>
      <h1 className="bg-blue-500 w-full text-center text-white font-bold h-8 py-0">
        Free shopping on orders over $75. Free Return
      </h1>

      {/* Navbar Container */}
      <div className="sticky top-0 z-50 shadow-md">
        <div className="flex mx-96 text-1xl gap-6">
          {/* SearchBar Start */}
          <div className="flex">
            <input
              className="w-56 px-2 border transition-all duration-300 ease-in-out focus:outline-none"
              type="search"
              placeholder="Search your Required"
            />
            <h1 className="text-4xl mx-0 my-1" onClick={SearchClick}>
              <IoMdSearch className="relative -mx-10" />
            </h1>
          </div>
          {/* SearchBar End */}

          {/* Welcome Text */}
          {currentUser ? (
            <span className="font-bold flex uppercase fixed text-left mt-2 px-4">
              Welcome, {currentUser?.username}
            </span>
          ) : (
            <></>
          )}

          {/* Navbar Links */}
          <div className="font-serif lg:w-full py-2 text-1xl flex justify-end w-auto">
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
                  className="px-2 font-bold hover:text-white hover:bg-orange-500 hover:rounded-3xl"
                  onClick={() => {
                    logout();
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
            <div className="flex text-2xl gap-2 text-1xl">
              <Link to="/FAQ">
                <BiHelpCircle className="hover:text-white hover:bg-orange-500 hover:rounded-3xl" />
              </Link>
              <Link to="/Cart">
                <MdShoppingCart className="hover:text-white hover:bg-orange-500 hover:rounded-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
