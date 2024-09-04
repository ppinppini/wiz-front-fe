import { createBrowserRouter } from "react-router-dom";
import Nav from "../components/Navbar";
import Pages from "../pages/Pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            {
                path: "/pages",
                element: <Pages />,
            },
        ],
    },
]);
