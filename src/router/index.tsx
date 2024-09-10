import { createBrowserRouter } from "react-router-dom";
// import Nav from "../components/Navbar";

import KtWizHistory from "../pages/KtWizHistory";
import KtWizAbout from "../pages/KtWizAbout";
import Schedule from "../pages/game/Schedule";
import Layouts from "../layouts/Layouts";
import Slide from '../components/Slide';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                path: "/",  // 루트 경로에 Slide.tsx를 추가
                element: <Slide />,  // Slide 컴포넌트 렌더링
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
