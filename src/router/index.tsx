import { createBrowserRouter } from "react-router-dom";
// import Nav from "../components/Navbar";

import KtWizHistory from "../pages/info/History";
import KtWizAbout from "../pages/info/About";
import Schedule from "../pages/game/Schedule";
<<<<<<< HEAD
import Layouts from "../layouts/Layouts";
import Slide from '../components/Slide';
=======
import Main from "../pages/main/Main";
>>>>>>> 1cfdc61becd86a5f3b2ce46be500ab3a721d5a14

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
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
