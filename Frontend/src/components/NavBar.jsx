import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="relative select-none bg-blue-300 lg:flex lg:items-stretch w-full">
        <div className="flex flex-no-shrink items-stretch h-12">
          <Link
            to="/"
            className="flex-no-grow md:text-3xl text-xl font-bold flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark"
          >
            Myth Buster
          </Link>

          <button
            onClick={toggleMenu}
            className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
          >
            {isMenuOpen ? (
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow`}
        >
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <Link
              to="filter"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-blue-700 no-underline  font-semibold flex items-center hover:bg-grey-dark"
            >
              Filter
            </Link>
            {!user ? (
              <>
                <Link
                  to="signup"
                  className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline text-black font-semibold flex items-center hover:bg-grey-dark"
                >
                  <button className="bg-white p-2 rounded text-blue-500 font-bold hover:scale-105">
                    Sign Up
                  </button>
                </Link>
                <Link
                  to="login"
                  className="flex-no-grow text-black flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline font-semibold flex items-center hover:bg-grey-dark"
                >
                  <button className="bg-blue-600 p-2 rounded text-white hover:scale-105">
                    Log In
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex items-center">
                <span className="mr-4">{user.username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 p-2 rounded text-white hover:scale-105"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
