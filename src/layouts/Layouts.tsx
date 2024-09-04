import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar";

const Layouts = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
        </>
    );
};
export default Layouts;
