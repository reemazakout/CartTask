import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../app/CartSlice";
import CartItems from "../../Components/CartItems/CartItems";

const CartPage = () => {
  const dispatch = useDispatch(); // Correct use of dispatch
  const cart = useSelector((state) => state.cartSlice.cart);

  // Display a message when the cart is empty
  if (cart.length === 0) {
    return (
      <div className="text-3xl text-center font-bold p-48">Cart is empty!</div>
    );
  }

  return (
    <div>
      {/* Display cart items */}
      {cart.map((item) => (
        <CartItems key={item.id} item={item} />
      ))}

      {/* Clear Cart button displayed at the bottom, not inside the map */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => dispatch(clearCart())}
          className=" mx-auto px-6 py-2 border rounded-md bg-red-500 text-white"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default CartPage;
