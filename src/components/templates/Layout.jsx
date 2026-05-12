import { Outlet } from "react-router-dom";
import NavBar from "../organisms/NavBar/NavBar";
import Footer from "../organisms/Footer/Footer";
import Toast from "../molecules/Toast";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <Toast />
    </div>
  );
}