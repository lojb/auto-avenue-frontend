import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { Logo, menu, close, profile } from "../assets";
import { navLinks } from "../constants";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [serverStatus, setServerStatus] = useState();

  const checkServerStatus = async () => {
    try {
      const response = await fetch("http://localhost:8080/health");
      if (response.ok) {
        console.log("Backend server is active and running.");
        setServerStatus(true);
      } else {
        console.log("Backend server is not available.");
        setServerStatus(false);
      }
    } catch (error) {
      console.error("Error occurred while checking server status:", error);
      // Display an error message to the user or trigger appropriate actions
    }
  };

  // Call the function immediately
  checkServerStatus();

  // Check server status every 10 seconds (adjust the interval as needed)
  setInterval(checkServerStatus, 20000);

  const handleClick = () => {
    logout();
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-slate-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className="w-[100px] h-[50px] object-contain rounded"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
                           hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} 
                                  p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
                          font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {user && (
          <div>
            <Link
              to="/create"
              className="px-4 py-2 rounded-md bg-secondary text-black font-medium hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              Create
            </Link>
          </div>
        )}
        {user && user.role === "ADMIN" && (
          <div>
            <Link
              to="/admin"
              className="px-4 py-2 rounded-md bg-secondary text-black font-medium hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              AdminPanel
            </Link>
          </div>
        )}
        {user && (
          <div className="text-white flex items-center gap-2">
            <Link to={`/profilepage/${user.userId}`}>
              <div className="flex items-center">
                <span className="mr-2">{user.username}</span>
                <img className="w-8 h-8" src={profile} alt="profile" />
              </div>
            </Link>
            <Link to={"/"}>
              <button
                className="ml-4 px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                onClick={handleClick}
              >
                Log out
              </button>
            </Link>
          </div>
        )}
        {!user && (
          <div>
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-secondary text-black font-medium hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              Login
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 rounded-md bg-primary text-black font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
                Signup
              </button>
            </Link>
          </div>
        )}
        {serverStatus ? (
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        ) : (
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
