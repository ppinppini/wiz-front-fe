import { createBrowserRouter } from "react-router-dom";
import Nav from "../components/Navbar";

import KtWizHistory from "../pages/KtWizHistory";
import KtWizAbout from "../pages/KtWizAbout";

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
        ],
    },
]);
