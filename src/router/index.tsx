import { createBrowserRouter } from "react-router-dom";
import Nav from "../components/Navbar";

import KtWizHistory from "../pages/KtWizHistory";
import KtWizAbout from "../pages/KtWizAbout";
import Schedule from "../pages/game/Schedule";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
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
