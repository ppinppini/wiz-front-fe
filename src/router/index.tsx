import { createBrowserRouter } from "react-router-dom";
// import Nav from "../components/Navbar";

import KtWizHistory from "../pages/info/History";
import KtWizAbout from "../pages/info/About";

import Layouts from "../layouts/Layouts";
//import Slide from '../components/Slide';


import Main from "../pages/main/Main";
import Schedule from "../pages/game/Schedule";
import RankingRecord from "../pages/game/RankingRecord";
import Pitchersdetail from "../pages/players/details/Pitchersdetail";
import Staff from "../pages/players/Staff";
import Pitchers from "../pages/players/Pitchers";


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
                path: "/game/schedule",
                element: <Schedule />,
            },
            /*
            {
                path: "/player/pitcher/details/:backnum",  // backnum을 URL 파라미터로 받음
                element: <Pitchersdetail />,
            },
            */
            {
                path: "/player/pitcher/details",  
                element: <Pitchersdetail />,
            },
            {   path: "/player/pitcher",
                element: <Pitchers/>,
            }
        ],
    },
    {
        path: "/player/coach",
        element: <Staff />,  // CoachStaff 페이지 설정
    }
]);
