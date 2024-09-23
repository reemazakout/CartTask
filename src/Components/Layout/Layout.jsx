import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow container mx-auto pt-[120px] pb=[110px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
