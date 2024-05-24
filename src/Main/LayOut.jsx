import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router-dom";


const LayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default LayOut;