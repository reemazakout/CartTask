import Products from "../Products/Products";
import Header from "./../../Components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="py-7"></div>
      <Products />
    </div>
  );
}
