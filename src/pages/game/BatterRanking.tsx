import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { TGameBatterRank } from "../../types/types";
import GamePlayerRankingTop from "../../components/rank/GamePlayerRankingTop";

const BatterRanking = () => {
  const [hraTop3, setHraTop3] = useState<TGameBatterRank>([]);
  const [hrTop3, setWHrTop3] = useState<TGameBatterRank>([]);
  const [hraTop5, setHraTop5] = useState<TGameBatterRank>([]);
  const [error, setError] = useState<string | null>(null);

  if (error) {
    <div>error..!</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 평균자책점 TOP3
        const hraTop3Data = await api.getGameBatterHraTop3();
        // 승리 TOP3
        const hrTop3Data = await api.getGameBatterHrTop3();
        // 평균자책점 TOP5
        const hraTop5Data = await api.getGameAllBatterHraTop5();
        setHraTop3(hraTop3Data!);
        setWHrTop3(hrTop3Data!);
        setHraTop5(hraTop5Data!);
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
  return (
    <>
      <div className="flex flex-col items-center">
        {/* PITCHER TOP PART CONTAINER*/}
        <GamePlayerRankingTop
          playerDataType="batter"
          hraTop3={hraTop3}
          hrTop3={hrTop3}
          hraTop5={hraTop5}
        />
        {/* PITCHER BOTTOM PART CONTAINER*/}
        {/* BOTTOM PART HEADER CONTAINER */}
        <div>
          {/* KT/ALL TAB */}
          {/* SEARCH BAR */}
          {/* SEASON FILTER */}
        </div>
        {/* TABLE */}
      </div>
    </>
  );
};
export default BatterRanking;
