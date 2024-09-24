import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { TBatterRecordRank, TGameBatterRank } from "../../types/types";
import GamePlayerRankingTop from "../../components/rank/GamePlayerRankingTop";
import TeamBatterRecordRankingTable from "../../components/rank/TeamBatterRecordRankingTable";
import BackgroundImage from "../../components/BackgroundImage";
import TabMenuBar from "../../components/TabMenuBar";
import TabMenuNavbar from "../../components/TabMenuNavbar";
import playertogether from "../../assets/kt4.png";
import PageInnerTab from "../../components/PageInnerTab";
import PageLocator from "../../components/PageLocator";
import RectSkeleton from "../../components/skeleton/RectSkeleton";
import AllBatterRecordRankingTable from "../../components/rank/AllBatterRecordRankingTable";

const BatterRanking = () => {
  const [hraTop3, setHraTop3] = useState<TGameBatterRank>([]);
  const [hrTop3, setWHrTop3] = useState<TGameBatterRank>([]);
  const [hraTop5, setHraTop5] = useState<TGameBatterRank>([]);
  const [batterRecord, setBatterRecord] = useState<TBatterRecordRank>([]);
  const [allBatterRecord, setAllBatterRecord] = useState<TBatterRecordRank>([]);
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
        const hraTop3Data = await api.getGameBatterHraTop3();
        // 승리 TOP3
        const hrTop3Data = await api.getGameBatterHrTop3();
        // 평균자책점 TOP5
        const hraTop5Data = await api.getGameAllBatterHraTop5();
        // 팀 타자기록 테이블
        const batterRecordRanking = await api.getGameBatterRecordRanking(
          "2024",
          "",
          "ERA"
        );
        // 전체 타자기록 테이블
        const allBatterRecordRanking = await api.getGameAllBatterRecordRanking(
          "2024",
          "",
          "ERA"
        );
        setHraTop3(hraTop3Data!);
        setWHrTop3(hrTop3Data!);
        setHraTop5(hraTop5Data!);
        setBatterRecord(batterRecordRanking!);
        setAllBatterRecord(allBatterRecordRanking!);
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
    const searchPlayer = await api.getGameBatterRecordRanking(
      "2024",
      searchKeyword,
      "HRA  "
    );
    tabType === "TEAM"
      ? setBatterRecord(searchPlayer)
      : setAllBatterRecord(searchPlayer);
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
        <TabMenuBar tabs={gameTabs} tabtitle={"순위기록"} />
        {/* 스크롤 시 나타나는 TabMenuNavbar 컴포넌트 */}
        {isSticky && (
          <div
            className={`fixed top-0 left-0 z-50 w-full ${!hasAnimated ? "animate-diagonal-slide" : ""}`}
            onAnimationEnd={() => setHasAnimated(true)}
          >
            <TabMenuNavbar menuItems={gameTabs} tabtitle={"순위기록"} />
          </div>
        )}

        {/* 메인 컨텐츠 컨테이너 */}
        <div className="w-[1100px] h-[2600px] mx-[25.1em] pt-[4.625em] relative">
          <PageLocator
            pagePath="> Game > 정규 리그 > 순위 기록 > "
            currentPage="타자 순위"
          />

          {/* 순위기록 페이지 내부 탭 */}
          <PageInnerTab tabs={rankTabs} currentTab="타자순위" />
          {/* BATTER TOP PART CONTAINER*/}
          <GamePlayerRankingTop
            playerDataType="batter"
            hraTop3={hraTop3}
            hrTop3={hrTop3}
            hraTop5={hraTop5}
            loading={loading}
          />
          {/* BATTER BOTTOM PART CONTAINER*/}
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
                    console.log(batterRecord);
                  }}
                >
                  검색
                </button>
              </div>
            </div>
            {/* SEASON FILTER */}
          </div>
          {/* TABLE */}
          {activeTab === "TEAM" ? (
            loading ? (
              <div className="w-full mt-[10px]">
                <RectSkeleton width="1100" height="891" />
              </div>
            ) : (
              <TeamBatterRecordRankingTable batterRecord={batterRecord} />
            )
          ) : loading ? (
            <div className="w-full mt-[10px]">
              <RectSkeleton width="1100" height="891" />
            </div>
          ) : (
            <AllBatterRecordRankingTable allBatterRecord={allBatterRecord} />
          )}
        </div>
      </div>
    </>
  );
};
export default BatterRanking;
