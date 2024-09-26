import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { api } from "../../api/api";
import GameBoxScoreSchedule from "../../components/game/GameBoxScoreSchedule";
import GameBoxScoreMainRecord from "../../components/game/GameBoxScoreMainRecord";
import GameBoxScoreBatterRecord from "../../components/game/GameBoxScoreBatterRecord";
import GameBoxScorePitcherRecord from "../../components/game/GameBoxScorePitcherRecord";
import React, { useEffect, useMemo, useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import playertogether from "../../assets/kt4.png";
import TabMenuBar from "../../components/TabMenuBar";
import TabMenuNavbar from "../../components/TabMenuNavbar";
import PageLocator from "../../components/PageLocator";

const BoxScore = () => {
    
    const [searchParams] = useSearchParams();
    const gameDate = searchParams.get("gameDate");
    const gmkey = searchParams.get("gmkey");
    const [isSticky, setIsSticky] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const gameTabs = [
        { title: "경기 일정", route: "../game/schedule" },
        { title: "박스 스코어", route: "../game/boxScore" },
        { title: "순위기록", route: "../game/ranking/team" },
      ];

    if (!gameDate || !gmkey) {
        return <h1>데이터가 없습니다. URL이 잘못되었습니다.</h1>;
    }

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["boxScore", gameDate, gmkey],
        queryFn: () => api.boxScoreFetcher(gameDate, gmkey),
    });

    const scoreBoardMemo = useMemo(() => data?.data?.scoreboard, [data]);
    const scheduleMemo = useMemo(() => data?.data?.schedule, [data]);
    const mainRecordsMemo = useMemo(() => data?.data?.etcgames, [data]);
    const hbattersMemo = useMemo(() => data?.data?.hbatters, [data]);
    const vbattersMemo = useMemo(() => data?.data?.vbatters, [data]);
    const hpitcherMemo = useMemo(() => data?.data?.hpitchers, [data]);
    const vpitcherMemo = useMemo(() => data?.data?.vpitchers, [data]);

    const homeName = scheduleMemo?.current?.home;
    const visitName = scheduleMemo?.current?.visit;

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
    
    if (isLoading) return <h1> Loading ...</h1>;

    return (
        <div className="flex flex-col items-center gap-10 bg-black">
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
            <div>
                {/* 페이지 로케이터 */}
                <PageLocator
                    pagePath="> Game > 정규 리그 > 순위 기록 > "
                    currentPage="박스스코어"
                />
                <GameBoxScoreSchedule scoreBoard={scoreBoardMemo} schedule={scheduleMemo} />
                <GameBoxScoreMainRecord etcgames={mainRecordsMemo} />
                <GameBoxScoreBatterRecord batters={hbattersMemo} name={homeName} />
                <GameBoxScoreBatterRecord batters={vbattersMemo} name={visitName} />
                <GameBoxScorePitcherRecord pitchers={hpitcherMemo} name={homeName} />
                <GameBoxScorePitcherRecord pitchers={vpitcherMemo} name={visitName} />
            </div>
        </div>
    );
};

export default React.memo(BoxScore);
