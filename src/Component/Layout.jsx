import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar always full width */}
            <Navbar />

            {/* Main content */}
            <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
                <Outlet />
            </main>

            {/* Footer always full width */}
            <Footer />
        </div>
    );
};

export default Layout;