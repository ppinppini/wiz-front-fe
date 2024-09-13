import { createBrowserRouter } from "react-router-dom";
import Nav from "../components/Navbar";

import KtWizHistory from "../pages/info/History";
import KtWizAbout from "../pages/info/About";
import Schedule from "../pages/game/Schedule";
import Main from "../pages/main/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/ktwiz/about",
                element: <KtWizAbout />,
            },
            {
                path: "/ktwiz/history",
                element: <KtWizHistory />,
            },
            {
                path: "/game/regular/schedule",
                element: <Schedule />,
            },
        ],
    },
]);
