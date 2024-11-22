import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nabvar from "../Navbar/Nabvar";


const Root = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;