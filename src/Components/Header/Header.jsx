import slider1 from "../../assets/slider1.jpg";
import product2 from "../../assets/product2.jpg";

export default function Header() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-8 shadow-2xl">
          <img
            src={slider1}
            alt="Main Product"
            className="w-full h-[300px] object-cover rounded-lg "
          />
        </div>

        <div className="col-span-1 md:col-span-4 flex flex-col md:flex-row gap-2">
          <div className="flex-1 shadow-2xl">
            <img
              src={product2}
              alt="Product 2"
              className="w-full h-[300px] object-cover rounded-lg " // ارتفاع متناسب
            />
          </div>
        </div>
      </div>
    </div>
  );
}
