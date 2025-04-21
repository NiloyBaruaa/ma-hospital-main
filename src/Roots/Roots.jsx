import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import UpperNav from "../Components/UpperNav/UpperNav";




const Roots = () => {
    return (
        <div className="bg-white">
            <UpperNav></UpperNav>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;