import { Outlet } from "react-router-dom";

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