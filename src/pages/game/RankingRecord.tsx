import { useEffect, useState } from "react";
import PageLocator from "../../components/PageLocator";
import { TGameSeasonTeamRank, TGameSeasonTeamRecord } from "../../types/types";
import { api } from "../../api/api";
import TemaSeasonRankChart from "../../components/rank/TeamSeasonRankChart";
import Table from "../../components/rank/Table";

const RankingRecord = () => {

  const [rankList, setRankList] = useState<TGameSeasonTeamRank>([]);
  const [recordList, setRecordList] = useState<TGameSeasonTeamRecord>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {      
    const fetchData = async () => {
      try {
        const gameSeasonTeamRankData = await api.getGameSeasonTeamRank();
        const gameSeasonTeamRecordData = await api.getGameSeasonTeamRecord();
        setRankList(gameSeasonTeamRankData);        
        setRecordList(gameSeasonTeamRecordData);        
      } catch (err) {
        if(err instanceof Error){
          setError(err.message);
        } else {
          setError("알 수 없는 에러 발생")
        }
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div className='flex flex-col items-center'>에러 발생: {error}</div>;
  }

  return (
    <>
      <div className='flex flex-col items-center'>
        {/* 메인 컨텐츠 컨테이너 */}
        <div className='w-[1100px] h-[1590.5px] mx-[25.1em] pt-[4.625em] relative'>

          {/* 페이지 로케이터 */}
          <PageLocator pagePath='> Game > 정규 리그 >' currentPage='경기 일정' />

          {/* 순위기록 페이지 내부 탭 */}
          {/* ~ 탭작업 다른 팀원분들이 진행중 (보류) ~ */}

          {/* 2024 SEASON 팀 순위 */}
          <div className="block mt-[40px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500">2024 시즌 팀 순위</h4>
            {/* 2024 SEASON 팀 순위 차트 */}
            <div className="border-[1px] border-gray-500 w-full h-full">
              <TemaSeasonRankChart rankList={rankList} /> 
            </div>
          </div>

          {/* 2024 SEASON 팀 기록 */}
          <div className="block mt-[80px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500">2024 시즌 팀 기록</h4>
            {/* <pre>{JSON.stringify(recordList, null, 2)}</pre> */}
            <Table recordList={recordList}/>
          </div>

          {/* 2024 SEASON 팀 투수 기록 */}
          <div className="block mt-[80px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500">2024 팀 투수 기록</h4>

          </div>

          {/* 2024 SEASON 팀 타자 기록 */}
          <div className="block mt-[80px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500">2024 팀 타자 기록</h4>

          </div>

          {/* 2024 SEASON 팀 간 승패표 */}
          <div className="block mt-[80px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500">2024 팀 간 승패표</h4>

          </div>

        </div>
      </div>
    </>
  );
}
export default RankingRecord