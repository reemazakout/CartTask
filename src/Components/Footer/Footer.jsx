import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold">
            Shop Cart{" "}
          </Link>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link
            to="/"
            className="hover:underline transition duration-300 ease-in-out hover:text-blue-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:underline transition duration-300 ease-in-out hover:text-blue-300"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="hover:underline transition duration-300 ease-in-out hover:text-blue-300"
          >
            Cart
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm">&copy; 2024 MyCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
