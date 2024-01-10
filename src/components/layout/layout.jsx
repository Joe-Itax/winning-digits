import { Outlet } from "react-router-dom";
// import Footer from "../footer/footer";

function Layout() {
  return (
    <>
      <main className="h-screen relative text-gray-100">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default Layout;
