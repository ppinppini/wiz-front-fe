import { useQuery } from "@tanstack/react-query";
import { useLocation, useSearchParams } from "react-router-dom";
import { api } from "../../api/api";
import GameBoxScoreSchedule from "../../components/game/GameBoxScoreSchedule";
import GameBoxScoreMainRecord from "../../components/game/GameBoxScoreMainRecord";
import GameBoxScoreBatterRecord from "../../components/game/GameBoxScoreBatterRecord";
import GameBoxScorePitcherRecord from "../../components/game/GameBoxScorePitcherRecord";

const BoxScore = () => {
    // 쿼리스트링을 읽기 위한 useSearchParams 사용
    const [searchParams] = useSearchParams();
    const gameDate = searchParams.get("gameDate");
    const gmkey = searchParams.get("gmkey");

    // location에서 홈과 원정 팀 로고 값은 전달받음
    const location = useLocation();
    const homeLogo = location?.state?.homeLogo || null;
    const visitLogo = location?.state?.visitLogo || null;

    if (!gameDate || !gmkey) {
        return <h1>데이터가 없습니다. URL이 잘못되었습니다.</h1>;
    }

    const { data, isError, error, isLoading } = useQuery({
        queryKey: ["boxScore", gameDate, gmkey],
        queryFn: () => api.boxScoreFetcher(gameDate, gmkey),
    });

    
    const scoreBoard = data?.data?.scoreboard;
    const schedule = data?.data?.schedule;
    const mainRecords = data?.data?.etcgames;
    const hbatters = data?.data?.hbatters;
    const vbatters = data?.data?.vbatters;
    const hpitcher = data?.data?.hpitchers;
    const vpitcher = data?.data?.vpitchers;

    const homeName = schedule?.current?.home;
    const visitName = schedule?.current?.visit;


    if (isError) return <h1>{error.message}</h1>;
    if (isLoading) return <h1> Loading ...</h1>;

    return (
        <div className="flex flex-col items-center gap-10">
            <GameBoxScoreSchedule scoreBoard={scoreBoard} schedule={schedule} />
            <GameBoxScoreMainRecord etcgames={mainRecords} />
            <GameBoxScoreBatterRecord batters={hbatters} name={homeName} />
            <GameBoxScoreBatterRecord batters={vbatters} name={visitName} />
            <GameBoxScorePitcherRecord pitchers={hpitcher} name={homeName} />
            <GameBoxScorePitcherRecord pitchers={vpitcher} name={visitName} />
        </div>
    );
};

export default BoxScore;
