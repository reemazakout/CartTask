import { Link, NavLink } from "react-router-dom";
import shoppingcart from "../../assets/shoppingcart.png";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cartSlice.cart);
  const navLinkClass = ({ isActive }) =>
    `relative before:transition-[width] before:duration-300 before:content-[''] before:block before:h-[2px] before:bg-blue-500 before:absolute before:left-0 before:-bottom-1 hover:before:w-full hover:font-bold ${
      isActive ? "font-bold before:w-full" : "before:w-0"
    }`;

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu when clicking outside
  const menuRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md w-full fixed z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={shoppingcart} alt="Logo" className="w-12 h-12" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 text-gray-800">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Cart - {cart.length}
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="flex flex-col p-4 space-y-2 bg-gray-100">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/cart"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Cart - {cart.length}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
