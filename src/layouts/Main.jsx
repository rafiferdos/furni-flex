import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen lg:mt-12">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Main;