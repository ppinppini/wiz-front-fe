import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { api } from "../../api/api";
import GameBoxScoreSchedule from "../../components/game/GameBoxScoreSchedule";
import GameBoxScoreMainRecord from "../../components/game/GameBoxScoreMainRecord";
import GameBoxScoreBatterRecord from "../../components/game/GameBoxScoreBatterRecord";
import GameBoxScorePitcherRecord from "../../components/game/GameBoxScorePitcherRecord";
import React, { useMemo } from "react";

const BoxScore = () => {
    
    const [searchParams] = useSearchParams();
    const gameDate = searchParams.get("gameDate");
    const gmkey = searchParams.get("gmkey");


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

    if (isError) return <h1>{error.message}</h1>;
    if (isLoading) return <h1> Loading ...</h1>;

    return (
        <div className="flex flex-col items-center gap-10 bg-black">
            <GameBoxScoreSchedule scoreBoard={scoreBoardMemo} schedule={scheduleMemo} />
            <GameBoxScoreMainRecord etcgames={mainRecordsMemo} />
            <GameBoxScoreBatterRecord batters={hbattersMemo} name={homeName} />
            <GameBoxScoreBatterRecord batters={vbattersMemo} name={visitName} />
            <GameBoxScorePitcherRecord pitchers={hpitcherMemo} name={homeName} />
            <GameBoxScorePitcherRecord pitchers={vpitcherMemo} name={visitName} />
        </div>
    );
};

export default React.memo(BoxScore);
