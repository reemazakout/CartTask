import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../app/CartSlice";

export default function Card({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  console.log(cart);
  const { id, name, price, image, description, category } = product;

  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all transform duration-300">
        <a>
          <img
            className="p-8 rounded-t-lg w-full h-80 object-cover"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              {name}
            </h5>
          </a>
          <a>
            <h5 className="text-xl font-semibold tracking-tight line-clamp-1 text-gray-900 dark:text-white">
              {description}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-gray-900 line-clamp-1">
              {category}
            </span>
            <span className="text-3xl mx-3 text-blue-500">{price}$</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="text-white cursor-pointer text-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add
            </button>
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              className="text-white cursor-pointer text-md bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
