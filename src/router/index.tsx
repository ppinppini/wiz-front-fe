import { createBrowserRouter } from "react-router-dom";
// import Nav from "../components/Navbar";

import KtWizHistory from "../pages/info/History";
import KtWizAbout from "../pages/info/About";

import Layouts from "../layouts/Layouts";
//import Slide from '../components/Slide';


import Main from "../pages/main/Main";
import Schedule from "../pages/game/Schedule";
import TeamRanking from "../pages/game/TeamRanking";
import Pitchersdetail from "../pages/players/details/Pitchersdetail";
import PitcherRanking from "../pages/game/PitcherRanking";
import BatterRanking from "../pages/game/BatterRanking";
import CrowdStatus from "../pages/game/CrowdStatus";
import Staff from "../pages/players/Staff";
import Pitchers from "../pages/players/Pitchers";
import BoxScore from "../pages/game/BoxScore";

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
      {
        path: "/game/boxscore",
        element: <BoxScore />,
      },
      {
        path: "/game/ranking/team",
        element: <TeamRanking />,
      },
      {
        path: "/game/ranking/pitcher",
        element: <PitcherRanking />,
      },
      {
        path: "/game/ranking/batter",
        element: <BatterRanking />,
      },
      {
        path: "/game/ranking/crowd",
        element: <CrowdStatus />,
      },
      {
        path: "/player/pitcher/details",
        element: <Pitchersdetail />,
      },
    ],
  },
  {
    path: "/player/coach",
    element: <Staff />,  // CoachStaff 페이지 설정
  },
  {
    path: "/player/pitcher",
    element: <Pitchers />,  // Pitchers 페이지 설정
  },
]);
