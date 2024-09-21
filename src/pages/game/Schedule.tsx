import PageLocator from "../../components/PageLocator";
import ScheduleTop from "../../components/game/ScheduleTop";
import ScheduleCalendar from "../../components/game/ScheduleCalendar";
import TabMenuBar from "../../components/TabMenuBar";
import BackgroundImage from "../../components/BackgroundImage";
import playertogether from "../../assets/kt4.png";
import { useEffect, useState } from "react";
import TabMenuNavbar from "../../components/TabMenuNavbar";
const Schedule = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(false);

  const gameTabs = [
    { title: "경기 일정", route: "" },
    { title: "박스 스코어", route: "../game/boxScore" },
    { title: "순위기록", route: "../game/ranking/team" },
    // { title: "관전포인트", route: "../game/watchPoint" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 630) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setHasAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 클린업 함수에서 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col items-center bg-black">
      <BackgroundImage
        imageUrl={playertogether}
        className="title-banner"
        height="782px"
      />
      <TabMenuBar tabs={gameTabs} />
      {/* 스크롤 시 나타나는 TabMenuNavbar 컴포넌트 */}
      {isSticky && (
        <div
          className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? "animate-diagonal-slide" : ""}`}
          onAnimationEnd={() => setHasAnimated(true)}
        >
          <TabMenuNavbar menuItems={gameTabs} />
        </div>
      )}

      {/* 메인 컨텐츠 컨테이너 */}
      <div className="w-[1100px] h-[1590.5px] mx-[25.1em] pt-[4.625em] relative">
        {/* 페이지 로케이터 */}
        <PageLocator pagePath="> Game > 정규 리그 >" currentPage="경기 일정" />

        {/* 상단 게임 정보 - 카드 */}
        <ScheduleTop />

        {/* 월간 게임 정보 - 캘린더 */}
        <ScheduleCalendar />
      </div>

      {/* 푸터 */}
    </div>
  );
};
export default Schedule;
