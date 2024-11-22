import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nabvar from "../Navbar/Nabvar";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;