import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeFromCart } from "../../app/CartSlice";

export default function CartItems({ item }) {
  const { name, image, price, quantity, id } = item;
  const cart = useSelector((state) => state.cartSlice.cart);

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const dispatch = useDispatch();

  return (
    <div className="p-5 flex flex-col md:flex-row md:items-center border-b">
      <div className="md:w-1/4">
        <img src={image} alt="Product" className="w-16 h-16 mx-auto" />
      </div>
      <div className="md:w-1/4 text-center md:text-left">{name}</div>
      <div className="md:w-1/4 flex items-center justify-center md:justify-start space-x-2">
        <button
          onClick={() => dispatch(decrement(id))}
          className="px-2 py-1 border"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => dispatch(increment(id))}
          className="px-2 py-1 border"
        >
          +
        </button>
      </div>
      <div className="md:w-1/4 text-center md:text-left">
        {(price * quantity).toFixed(2)}$
      </div>
      <div className="md:w-1/4 text-center md:text-left">
        <button
          onClick={() => dispatch(removeFromCart(id))}
          className="px-2 py-1 rounded-md border bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
