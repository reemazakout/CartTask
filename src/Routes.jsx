import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import { Provider } from "react-redux";
import { store } from "./app/store";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <Provider store={store}>
          <RouterProvider router={routes}></RouterProvider>
        </Provider>
      </div>
    </>
  );
}
