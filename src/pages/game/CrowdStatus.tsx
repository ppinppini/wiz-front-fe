import { useEffect, useState } from "react";
import { TGameCrowdStatus } from "../../types/types";
import { api } from "../../api/api";
import PageLocator from "../../components/PageLocator";
import SeasonCrowdStatusChart from "../../components/rank/SeasonCrowdStatusChart";
import SeasonCrowdStatusTable from "../../components/rank/SeasonCrowdStatusTable";
import BackgroundImage from "../../components/BackgroundImage";
import playertogether from "../../assets/kt4.png";
import TabMenuBar from "../../components/TabMenuBar";
import TabMenuNavbar from "../../components/TabMenuNavbar";
import PageInnerTab from "../../components/PageInnerTab";

const CrowdStatus = () => {
  const [crowdStatus, setCrowdStatus] = useState<TGameCrowdStatus>([]);
  const [error, setError] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const gameTabs = [
    { title: "경기 일정", route: "../game/schedule" },
    { title: "박스 스코어", route: "../game/boxScore" },
    { title: "순위기록", route: "../game/ranking/team" },
    { title: "관전포인트", route: "../game/watchPoint" },
  ];

  const rankTabs = [
    { title: "팀순위", route: "../game/ranking/team" },
    { title: "투수순위", route: "../game/ranking/pitcher" },
    { title: "타자순위", route: "../game/ranking/batter" },
    { title: "관중현황", route: "../game/ranking/crowd" },
  ];

  if (error) {
    <div>error..!</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 관중현황
        const hraTop3Data = await api.getGameCrowdStatus();
        setCrowdStatus(hraTop3Data!);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("알 수 없는 에러 발생");
        }
      }
    };
    fetchData();
  }, []);

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

  if (error) {
    return <div className="flex flex-col items-center">에러 발생: {error}</div>;
  }

  return (
    <>
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
          <PageLocator
            pagePath="> Game > 정규 리그 >"
            currentPage="관중 현황"
          />
          {/* 순위기록 페이지 내부 탭 */}
          <PageInnerTab tabs={rankTabs} currentTab="관중현황" />
          {/* 2024 SEASON 누적 관중 차트 */}
          <div className="block mt-[40px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500 text-white">
              2024 시즌 누적관중
            </h4>
            <div className="border-[1px] border-gray-500 w-full h-full">
              <SeasonCrowdStatusChart crowdStatus={crowdStatus} />
            </div>
          </div>
          {/* 2024 SEASON 관중 기록 테이블 */}
          <div className="block mt-[100px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500 text-white">
              2024 시즌 관중기록
            </h4>
            {/* 2024 SEASON 누적 관중 차트 */}
            <div className="w-full h-full">
              <SeasonCrowdStatusTable crowdStatus={crowdStatus} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CrowdStatus;
