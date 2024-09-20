import { useEffect, useState } from "react";
import PageLocator from "../../components/PageLocator";
import {
  TGameSeasonTeamBatterRank,
  TGameSeasonTeamPitcherRank,
  TGameSeasonTeamRank,
  TGameSeasonTeamRecord,
  // TGameSeasonTeamvsRecord,
} from "../../types/types";
import { api } from "../../api/api";
import SeasonTeamRankChart from "../../components/rank/SeasonTeamRankChart";
import SeasonTeamRankTable from "../../components/rank/SeasonTeamRankTable";
import TeamPitcherRankingTable from "../../components/rank/TeamPitcherRankingTable";
import TeamBatterRankingTable from "../../components/rank/TeamBatterRankingTable";
// import SeasonTeamvsRecordTable from "../../components/rank/SeasonTeamvsRecordTable";

const TeamRanking = () => {
  const [rankList, setRankList] = useState<TGameSeasonTeamRank>([]);
  const [recordList, setRecordList] = useState<TGameSeasonTeamRecord>([]);
  const [pitcherRanking, setPitcherRanking] =
    useState<TGameSeasonTeamPitcherRank>([]);
  const [batterRanking, setBatterRanking] = useState<TGameSeasonTeamBatterRank>(
    []
  );
  // const [teamvsRecord, setTeamvsRecord] = useState<TGameSeasonTeamvsRecord>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 팀 순위
        const gameSeasonTeamRankData = await api.getGameSeasonTeamRank();
        // 팀 기록
        const gameSeasonTeamRecordData = await api.getGameSeasonTeamRecord();
        // 팀 투수 순위
        const gameSeasonTeamPitcherRankData =
          await api.getGameSeasonTeamPitcherRank();
        // 팀 타자 순위
        const gameSeasonTeamBatterRankData =
          await api.getGameSeasonTeamBatterRank();
        // 팀 상대 전적
        // const gameSeasonTeamvsRecordData = await api.getGameSeasonTeamvsRank();
        // state로 api값 관리
        setRankList(gameSeasonTeamRankData);
        setRecordList(gameSeasonTeamRecordData);
        setPitcherRanking(gameSeasonTeamPitcherRankData);
        setBatterRanking(gameSeasonTeamBatterRankData);
        // setTeamvsRecord(gameSeasonTeamvsRecordData);
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

  if (error) {
    return <div className="flex flex-col items-center">에러 발생: {error}</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center bg-black">
        {/* 메인 컨텐츠 컨테이너 */}
        <div className="w-[1100px] h-[2700px] mx-[25.1em] pt-[4.625em] relative">
          {/* 페이지 로케이터 */}
          <PageLocator
            pagePath="> Game > 정규 리그 >"
            currentPage="경기 일정"
          />

          {/* 순위기록 페이지 내부 탭 */}
          {/* ~ 탭작업 다른 팀원분들이 진행중 (보류) ~ */}

          {/* 2024 SEASON 팀 순위 */}
          <div className="block mt-[40px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500 text-white font-bold">
              2024 시즌 팀 순위
            </h4>
            {/* 2024 SEASON 팀 순위 차트 */}
            <div className="border-[1px] border-gray-500 w-full h-full">
              <SeasonTeamRankChart rankList={rankList} />
            </div>
          </div>

          {/* 2024 SEASON 팀 기록 */}
          <div className="block mt-[100px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500 text-white font-bold">
              2024 시즌 팀 기록
            </h4>
            <SeasonTeamRankTable recordList={recordList} />
          </div>

          {/* 2024 SEASON 팀 투수 기록 */}
          <div className="block mt-[100px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500 text-white font-bold">
              2024 팀 투수 기록
            </h4>
            <TeamPitcherRankingTable pitcherRanking={pitcherRanking} />
          </div>

          {/* 2024 SEASON 팀 타자 기록 */}
          <div className="block mt-[100px] h-[500px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500 text-white font-bold">
              2024 팀 타자 기록
            </h4>
            <TeamBatterRankingTable batterRanking={batterRanking} />
          </div>

          {/* 2024 SEASON 팀 간 승패표 */}
          {/* <div className="block mt-[100px] h-[400px]"> */}
          {/* <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500 text-white font-bold"> */}
          {/* 2024 팀 간 승패표 */}
          {/* </h4> */}
          {/* <SeasonTeamvsRecordTable /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default TeamRanking;
