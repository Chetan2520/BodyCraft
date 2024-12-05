import React, { useState } from "react";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [menuVisible, setMenuVisible] = useState(false);
  console.log("Current User", user);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="bg-dark text-white font-font">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Left: Logo */}
        <h1 className=" font-bold  text-3xl  bg-gradient-to-b from-white via-purple-500 to-purple-900 bg-clip-text text-transparent">
          BodyCraft.
        </h1>

        {/* Right: Login Button and Hamburger for Mobile */}
        <div className="flex items-center space-x-4 md:space-x-0"></div>
        {/* className="bg-purple-900 rounded-full px-6 py-2 " */}
        {/* Center: Navigation Links for Desktop */}
        <nav className="hidden px-8 rounded-full  bg-[#101010] md:flex space-x-6">
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? "purple" : "",
              padding: isActive ?"8px": "",
              width: isActive ?"auto": "",
              paddingLeft: isActive ?"20px": "",
              paddingRight: isActive ?"20px": "",
              borderRadius: isActive? "20px" : "",
             
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? "purple" : "",
              padding: isActive ?"8px": "",
              width: isActive ?"auto": "",
              paddingLeft: isActive ?"20px": "",
              paddingRight: isActive ?"20px": "",
              borderRadius: isActive? "20px" : "",            })}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? "purple" : "",
              padding: isActive ?"8px": "",
              width: isActive ?"auto": "",
              paddingLeft: isActive ?"20px": "",
              paddingRight: isActive ?"20px": "",
              borderRadius: isActive? "20px" : "",            })}
            to="/weightgain"
          >
            weightgain
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? "purple" : "",
              padding: isActive ?"8px": "",
              width: isActive ?"auto": "",
              paddingLeft: isActive ?"20px": "",
              paddingRight: isActive ?"20px": "",
              borderRadius: isActive? "20px" : "",            })}
            to="/weightloss"
          >
            WeightLoss
          </NavLink>
        </nav>

        {/* Right: Login Button for Desktop */}
        {/* <Button Button="Login"/> */}
        {/* <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> */}
        <div>
          {isAuthenticated && (
            <p className="font-font hidden md:block text-slate-400">
              {" "}
              User: {user.name}{" "}
            </p>
          )}
        </div>
        <div>
          {isAuthenticated ? (
            <button
              className="text-lg h-12 font-normal   relative bg-gradient-to-r from-blue-700 to-purple-800 text-white py-2 px-6 rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-900 hover:to-blue-700"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button
              className="text-lg h-12 font-normal   relative bg-gradient-to-r from-blue-700 to-purple-800 text-white py-2 px-6 rounded-lg overflow-hidden transition-all duration-300 hover:from-purple-900 hover:to-blue-700"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          )}
        </div>
        <button
          onClick={toggleMenu}
          className="focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {!menuVisible ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <aside
        className={`fixed top-0 left-0  h-full w-64 backdrop-blur-md bg-dark-500/10 transform ${
          menuVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Mobile Menu Links */}
        <nav className="flex flex-col text-2xl items-center gap-12  justify-around  space-y-4 p-6">
          <a href="#" className="hover:text-purple-500">
            Home
          </a>
          <a href="#" className="hover:text-purple-500">
            About
          </a>
          <a href="#" className="hover:text-purple-500">
            Services
          </a>
          <a href="#" className="hover:text-purple-500">
            Contact
          </a>
        </nav>
      </aside>
    </header>
  );
};

export default Navbar;
