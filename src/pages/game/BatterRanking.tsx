import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { TBatterRecordRank, TGameBatterRank } from "../../types/types";
import GamePlayerRankingTop from "../../components/rank/GamePlayerRankingTop";
import BatterRecordRankingTable from "../../components/rank/BatterRecordRankingTable";

const BatterRanking = () => {
  const [hraTop3, setHraTop3] = useState<TGameBatterRank>([]);
  const [hrTop3, setWHrTop3] = useState<TGameBatterRank>([]);
  const [hraTop5, setHraTop5] = useState<TGameBatterRank>([]);
  const [batterRecord, setBatterRecord] = useState<TBatterRecordRank>([]);
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
        // 평균자책점 TOP5
        const batterRecordRanking = await api.getGameBatterRecordRanking();
        setHraTop3(hraTop3Data!);
        setWHrTop3(hrTop3Data!);
        setHraTop5(hraTop5Data!);
        setBatterRecord(batterRecordRanking!);
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
      <div className="flex flex-col items-center bg-black">
        {/* 메인 컨텐츠 컨테이너 */}
        <div className="w-[1100px] h-[2000px] mx-[25.1em] pt-[4.625em] relative">
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
          <BatterRecordRankingTable batterRecord={batterRecord} />
        </div>
      </div>
    </>
  );
};
export default BatterRanking;
