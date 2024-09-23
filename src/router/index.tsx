import { createBrowserRouter } from "react-router-dom";
// import Nav from "../components/Navbar";

import KtWizHistory from "../pages/info/History";
import KtWizAbout from "../pages/info/About";

import Layouts from "../layouts/Layouts";
//import Slide from '../components/Slide';

import WizNews from "../pages/meida/WizNews";
import WizPress from "../pages/meida/WizPress";
import Main from "../pages/main/Main";
import Schedule from "../pages/game/Schedule";

import TeamRanking from "../pages/game/TeamRanking";
import Pitchersdetail from "../pages/players/details/Pitchersdetail";
import PitcherRanking from "../pages/game/PitcherRanking";
import BatterRanking from "../pages/game/BatterRanking";
import CrowdStatus from "../pages/game/CrowdStatus";
import Staff from "../pages/players/Staff";
import Pitchers from "../pages/players/Pitchers";
import Catchers from "../pages/players/Catchers";
import Infielders from "../pages/players/Infielders";
import Outfielders from "../pages/players/Outfielders";
import CheerTeam from "../pages/players/CheerTeam";
import BoxScore from "../pages/game/BoxScore";
import Catchersdetail from "../pages/players/details/Catchersdetail";


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
        path: "/media/wiznews",
        element: <WizNews />,
      },
      {
        path: "/media/wizpress",
        element: <WizPress />,
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
      
    ],
  },
  {
    path: "/player/coach",
    element: <Staff />, // CoachStaff 페이지 설정
  },
  {
    path: "/player/pitcher",
    element: <Pitchers />, // Pitchers 페이지 설정
  },
  {
    path: "/player/pitcher/details",
    element: <Pitchersdetail />,
  },
  {
    path: "/player/catcher",
    element: <Catchers />, // Catchers 페이지 설정
  },
  {
    path: "/player/catcher/details",
    element: <Catchersdetail />,
  },
  {
    path: "/player/infielder",
    element: <Infielders />, // Infielders 페이지 설정
  },
  {
    path: "/player/outfielder",
    element: <Outfielders />, // Outfielders 페이지 설정
  },
  {
    path: "/player/cheer",
    element: <CheerTeam />, // CheerTeam 페이지 설정
  },
]);
