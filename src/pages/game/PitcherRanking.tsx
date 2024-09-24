import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { TGamePitcherRank, TPitcherRecordRank } from "../../types/types";
import GamePlayerRankingTop from "../../components/rank/GamePlayerRankingTop";
import PitcherRecordRankingTable from "../../components/rank/TeamPitcherRecordRankingTable";
import BackgroundImage from "../../components/BackgroundImage";
import playertogether from "../../assets/kt4.png";
import TabMenuBar from "../../components/TabMenuBar";
import TabMenuNavbar from "../../components/TabMenuNavbar";
import PageInnerTab from "../../components/PageInnerTab";
import PageLocator from "../../components/PageLocator";
import RectSkeleton from "../../components/skeleton/RectSkeleton";
import AllPitcherRecordRankingTable from "../../components/rank/AllPitcherRecordRankingTable";

const PitcherRanking = () => {
  const [eraTop3, setEraTop3] = useState<TGamePitcherRank>([]);
  const [winTop3, setWinTop3] = useState<TGamePitcherRank>([]);
  const [eraTop5, setEraTop5] = useState<TGamePitcherRank>([]);
  const [pitcherRecord, setPitcherRecord] = useState<TPitcherRecordRank>([]);
  const [allPitcherRecord, setAllPitcherRecord] = useState<TPitcherRecordRank>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState<"TEAM" | "ALL">("TEAM");
  const [searchKeyword, setSearchKeyword] = useState<string>("");

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
        const eraTop3Data = await api.getGamePitcherEraTop3();
        // 승리 TOP3
        const winTop3Data = await api.getGamePitcherWinTop3();
        // 평균자책점 TOP5
        const eraTop5Data = await api.getGameAllPitcherEraTop5();
        // 팀 투수기록 테이블
        const pitcherRecordRanking = await api.getGamePitcherRecordRanking(
          "2024",
          "",
          "ERA"
        );
        // 전체 투수기록 테이블
        const allPitcherRecordRanking =
          await api.getGameAllPitcherRecordRanking("2024", "", "ERA");
        setEraTop3(eraTop3Data!);
        setWinTop3(winTop3Data!);
        setEraTop5(eraTop5Data!);
        setPitcherRecord(pitcherRecordRanking!);
        setAllPitcherRecord(allPitcherRecordRanking!);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("알 수 없는 에러 발생");
          setLoading(false);
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

  const searchBtnHandler = async (tabType: string) => {
    const searchPlayer = await api.getGamePitcherRecordRanking(
      "2024",
      searchKeyword,
      "ERA"
    );
    tabType === "TEAM"
      ? setPitcherRecord(searchPlayer)
      : setAllPitcherRecord(searchPlayer);
    return searchPlayer;
  };

  if (error) {
    <div>error..!</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center bg-black">
        <BackgroundImage
          imageUrl={playertogether}
          className="title-banner"
          height="782px"
        />
        <TabMenuBar tabs={gameTabs} tabtitle="순위기록" />
        {/* 스크롤 시 나타나는 TabMenuNavbar 컴포넌트 */}
        {isSticky && (
          <div
            className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? "animate-diagonal-slide" : ""}`}
            onAnimationEnd={() => setHasAnimated(true)}
          >
            <TabMenuNavbar menuItems={gameTabs} tabtitle="순위기록" />
          </div>
        )}
        {/* 메인 컨텐츠 컨테이너 */}
        <div className="w-[1100px] h-[1700px] mx-[25.1em] pt-[4.625em] relative">
          {/* 페이지 로케이터 */}
          <PageLocator
            pagePath="> Game > 정규 리그 > 순위 기록 > "
            currentPage="투수 순위"
          />
          {/* 순위기록 페이지 내부 탭 */}
          <PageInnerTab tabs={rankTabs} currentTab="투수순위" />
          {/* PITCHER TOP PART CONTAINER*/}
          <GamePlayerRankingTop
            playerDataType="pitcher"
            eraTop3={eraTop3}
            winTop3={winTop3}
            eraTop5={eraTop5}
            loading={loading}
          />
          {/* PITCHER BOTTOM PART CONTAINER*/}
          {/* BOTTOM PART HEADER CONTAINER */}
          <div className="flex flex-row justify-between items-center h-[50px] mt-[100px]">
            {/* TABLE TAB */}
            {loading ? (
              <div className="flex justify-start space-x-4">
                {/* TEAM TAB SKELETON*/}
                <div>
                  <RectSkeleton width="117" height="40" />
                </div>
                {/* ALL TAB SKELETON*/}
                <div>
                  <RectSkeleton width="110" height="40" />
                </div>
              </div>
            ) : (
              <div className="flex h-[40px] space-x-4">
                {/* TEAM TAB */}
                <button
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === "TEAM"
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 hover:bg-red-500 hover:text-white duration-300"
                  }`}
                  onClick={() => setActiveTab("TEAM")}
                >
                  TEAM
                </button>

                {/* ALL TAB */}
                <button
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === "ALL"
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 hover:bg-red-500 hover:text-white duration-300"
                  }`}
                  onClick={() => setActiveTab("ALL")}
                >
                  ALL
                </button>
              </div>
            )}
            <div>
              {/* SEARCH BAR */}
              <div>
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="선수 이름을 입력하세요."
                  className="w-[200px] h-[30px] pl-[5px] ml-[10px] rounded-lg"
                />
                <button
                  className="text-white font-bold ml-[10px] px-[15px] py-[3px] rounded-lg border-gray-300 border-[1px]"
                  onClick={() => {
                    searchBtnHandler(activeTab);
                    console.log(pitcherRecord);
                  }}
                >
                  검색
                </button>
              </div>
              {/* SEASON FILTER */}
              <div></div>
              {/* FILTER FUNCTION */}
            </div>
          </div>
          {/* TABLE */}
          {activeTab === "TEAM" ? (
            loading ? (
              <div className="w-full mt-[10px]">
                <RectSkeleton width="1100" height="891" />
              </div>
            ) : (
              <PitcherRecordRankingTable pitcherRecord={pitcherRecord} />
            )
          ) : loading ? (
            <div className="w-full mt-[10px]">
              <RectSkeleton width="1100" height="891" />
            </div>
          ) : (
            <AllPitcherRecordRankingTable allPitcherRecord={allPitcherRecord} />
          )}
        </div>
      </div>
    </>
  );
};
export default PitcherRanking;
