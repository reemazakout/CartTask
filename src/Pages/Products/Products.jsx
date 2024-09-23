import { useDispatch, useSelector } from "react-redux";
import Card from "../../Components/Card/Card";
import { useEffect } from "react";
import { fetchProducts } from "../../app/ProductsSlice";

export default function Products() {
  const products = useSelector((state) => state.productsSlice.filteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance
    dispatch(fetchProducts(controller.signal)); // Pass the signal to the thunk

    return () => {
      controller.abort(); // Cleanup function to cancel the request when the component unmounts
    };
  }, [dispatch]);

  return (
    <>
      <div className="py-5 font-bold text-4xl text-center">
        <span className="text-blue-600"> Welcome </span> To Products Section !
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
