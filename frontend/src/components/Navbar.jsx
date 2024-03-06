import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNav = () => {
    setNav((prevNav) => !prevNav);
  };

  return (
    <nav className="bg-[#1a1a1a] p-4 px-8 flex justify-between mb-6" ref={navRef}>
      <Link to="/" className="text-2xl flex font-extrabold font-mono">
        <div className="text-white">Sales</div>
        <div className="text-red-500">Vista</div>
      </Link>

      <ul className="text-white hidden md:flex leading-8 gap-8">
        <Link to="/addsales">
          <li>Add Sales</li>
        </Link>
        <Link to="/today-rev">
          <li>Today's Revenue</li>
        </Link>
        <Link to="/topsales">
          <li>Top Sales</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>

      <div className="md:hidden z-10 text-white" onClick={toggleNav}>
        {nav ? <FaTimes size={30} /> : <RxHamburgerMenu size={30} />}
      </div>

      <ul
        className={`${
          nav
            ? "text-white opacity-100 transform translate-x-0 transition-all duration-300 ease-in-out"
            : "opacity-0 transform -translate-x-full transition-all duration-300 ease-in-out"
        } transition-transform absolute top-0 left-0 min-w-64 h-screen bg-zinc-800/90 flex flex-col pt-16 gap-5 font-semibold items-start p-5 text-2xl z-[1]`}
      >
        <Link to="/addsales">
          <li>Add Sales</li>
        </Link>
        <Link to="/today-rev">
          <li>Today's Revenue</li>
        </Link>
        <Link to="/topsales">
          <li>Top Sales</li>
        </Link>
        <div className="w-full border-b-2 border-neutral-800"></div>
        <Link to="/login">
          <li className="bg-slate-700 p-2 px-4 rounded-3xl">Login</li>
        </Link>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
