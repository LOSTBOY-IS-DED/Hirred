import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className=" min-h-screen container border border-red-300">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
