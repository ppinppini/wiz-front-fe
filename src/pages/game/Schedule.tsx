import { useEffect } from "react";

import Tab from "../../components/Tab";
import PageLocator from "../../components/PageLocator";
// import GameInfoCardContainer from "../../components/GameInfoCardContainer";
import TopBanner from "../../components/TopBanner";

const Schedule = () => {
  const gameTabs = [
    { title: "경기 일정", route: "game/regular/schedule" },
    { title: "박스 스코어", route: "game/regular/boxscore" },
    { title: "순위기록", route: "game/regular/ranking/team" },
    { title: "관전포인트", route: "game/regular/watchPoint" },
  ];

  useEffect(() => {
    console.log("game component rendered .. ");
  }, []);

  return (
    <div className='flex flex-col items-center'>
      {/* 상단 배너 */}
      <TopBanner />

      {/* 탭 구현 */}
      <Tab tabs={gameTabs} />

      {/* 메인 컨텐츠 컨테이너 */}
      <div className='w-[1100px] h-[1590.5px] mx-[25.1em] pt-[4.625em] relative'>
        {/* 페이지 로케이터 */}
        <PageLocator pagePath='> Game > 정규 리그 >' currentPage='경기 일정' />

        {/* 상단 게임 정보 */}
        {/* <GameInfoCardContainer /> */}

        {/* 월간 게임 정보 */}
      </div>

      {/* 푸터 */}
    </div>
  );
};
export default Schedule;
