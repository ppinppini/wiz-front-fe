import TopBanner from "../../components/TopBanner";
import Tab from "../../components/Tab";
import PageLocator from "../../components/PageLocator";
import ScheduleTop from "../../components/game/ScheduleTop";
import ScheduleCalendar from "../../components/game/ScheduleCalendar";
import TabMenuBar from "../../components/TabMenuBar";

const Schedule = () => {
  const gameTabs = [
    { title: "경기 일정", route: "" },
    { title: "박스 스코어", route: "../game/boxScore" },
    { title: "순위기록", route: "../game/ranking/team" },
    { title: "관전포인트", route: "../game/watchPoint" },
  ];

  

  return (
    <div className='flex flex-col items-center bg-black'>
      {/* 상단 배너
      <TopBanner />

      {/* 탭 구현 */}
      {/* <Tab tabs={gameTabs} />  */}

      <TabMenuBar tabs={gameTabs}/>

      {/* 메인 컨텐츠 컨테이너 */}
      <div className='w-[1100px] h-[1590.5px] mx-[25.1em] pt-[4.625em] relative'>

        {/* 페이지 로케이터 */}
        <PageLocator pagePath='> Game > 정규 리그 >' currentPage='경기 일정' />

        {/* 상단 게임 정보 - 카드 */}
        <ScheduleTop />

        {/* 월간 게임 정보 - 캘린더 */}
        <ScheduleCalendar/>
      </div>

      {/* 푸터 */}
    </div>
  );
};
export default Schedule;
