import { useState, useEffect } from "react";
import GameRankCard from "./GameRankCard";
import { api } from "../api/api";

interface RankData {
  rank: number;
  game: number;
  wldName: string;
  wra: string;
}

const GameRank = () => {
  const [rankData, setRankData] = useState<RankData | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getGameRank(); // API 호출
        const { rank, game, wldName, wra } = data;

        setRankData({
          game,
          rank,
          wldName,
          wra: wra,
        });
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchData();
  }, []);

  //   if (loading) {
  //     return <div>로딩 중...</div>;
  //   }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="h-full">
      {rankData && (
        <GameRankCard
          rank={rankData.rank}
          game={rankData.game}
          wldName={rankData.wldName}
          wra={rankData.wra}
        />
      )}
    </div>
  );
};

export default GameRank;
