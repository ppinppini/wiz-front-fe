import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { TBatterRecordRank, TGameBatterRank } from "../../types/types";
import GamePlayerRankingTop from "../../components/rank/GamePlayerRankingTop";
import BatterRecordRankingTable from "../../components/rank/BatterRecordRankingTable";
import BackgroundImage from "../../components/BackgroundImage";
import TabMenuBar from "../../components/TabMenuBar";
import TabMenuNavbar from "../../components/TabMenuNavbar";
import playertogether from "../../assets/kt4.png";
import PageInnerTab from "../../components/PageInnerTab";
import PageLocator from "../../components/PageLocator";
import RectSkeleton from "../../components/skeleton/RectSkeleton";

const BatterRanking = () => {
  const [hraTop3, setHraTop3] = useState<TGameBatterRank>([]);
  const [hrTop3, setWHrTop3] = useState<TGameBatterRank>([]);
  const [hraTop5, setHraTop5] = useState<TGameBatterRank>([]);
  const [batterRecord, setBatterRecord] = useState<TBatterRecordRank>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  if (error) {
    <div>error..!</div>;
  }

  const gameTabs = [
    { title: "경기 일정", route: "../game/schedule" },
    { title: "박스 스코어", route: "../game/boxScore" },
    { title: "순위기록", route: "../game/ranking/team" },
  ];

  const rankTabs = [
    { title: "팀순위", route: "../game/ranking/team" },
    { title: "투수순위", route: "../game/ranking/pitcher" },
    { title: "타자순위", route: "../game/ranking/batter" },
    { title: "관중현황", route: "../game/ranking/crowd" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 평균자책점 TOP3
        const hraTop3Data = await api.getGameBatterHraTop3();
        // 승리 TOP3
        const hrTop3Data = await api.getGameBatterHrTop3();
        // 평균자책점 TOP5
        const hraTop5Data = await api.getGameAllBatterHraTop5();
        // 평균자책점 TOP5
        const batterRecordRanking = await api.getGameBatterRecordRanking();
        setHraTop3(hraTop3Data!);
        setWHrTop3(hrTop3Data!);
        setHraTop5(hraTop5Data!);
        setBatterRecord(batterRecordRanking!);
        setLoading(false);
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
        <div className="w-[1100px] h-[2100px] mx-[25.1em] pt-[4.625em] relative">
          <PageLocator
            pagePath="> Game > 정규 리그 >"
            currentPage="타자 순위"
          />

          {/* 순위기록 페이지 내부 탭 */}
          <PageInnerTab tabs={rankTabs} currentTab="타자순위" />
          {/* PITCHER TOP PART CONTAINER*/}
          <GamePlayerRankingTop
            playerDataType="batter"
            hraTop3={hraTop3}
            hrTop3={hrTop3}
            hraTop5={hraTop5}
            loading={loading}
          />
          {/* PITCHER BOTTOM PART CONTAINER*/}
          {/* BOTTOM PART HEADER CONTAINER */}
          <div>
            {/* KT/ALL TAB */}
            {/* SEARCH BAR */}
            {/* SEASON FILTER */}
          </div>
          {/* TABLE */}
          {loading ? (
            <div className="w-full mt-[100px]">
              <RectSkeleton width="1100" height="891" />
            </div>
          ) : (
            <BatterRecordRankingTable batterRecord={batterRecord} />
          )}
        </div>
      </div>
    </>
  );
};
export default BatterRanking;
