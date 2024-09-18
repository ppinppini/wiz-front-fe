import { useEffect, useState } from "react";
import { TGameCrowdStatus } from "../../types/types";
import { api } from "../../api/api";
import PageLocator from "../../components/PageLocator";
import SeasonCrowdStatusChart from "../../components/rank/SeasonCrowdStatusChart";
import SeasonCrowdStatusTable from "../../components/rank/SeasonCrowdStatusTable";

const CrowdStatus = () => {
  const [crowdStatus, setCrowdStatus] = useState<TGameCrowdStatus>([]);
  const [error, setError] = useState<string | null>(null);

  if (error) {
    <div>error..!</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 관중현황
        const hraTop3Data = await api.getGameCrowdStatus();
        setCrowdStatus(hraTop3Data!);
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
        {/* 메인 컨텐츠 컨테이너 */}
        <div className="w-[1100px] h-[1590.5px] mx-[25.1em] pt-[4.625em] relative">
          {/* 페이지 로케이터 */}
          <PageLocator
            pagePath="> Game > 정규 리그 >"
            currentPage="경기 일정"
          />
          {/* 2024 SEASON 누적 관중 차트 */}
          <div className="block mt-[40px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500">
              2024 시즌 팀 순위
            </h4>
            <div className="border-[1px] border-gray-500 w-full h-full">
              <SeasonCrowdStatusChart crowdStatus={crowdStatus} />
            </div>
          </div>
          {/* 2024 SEASON 관중 기록 테이블 */}
          <div className="block mt-[100px] h-[400px]">
            <h4 className="text-lg border-l-4 pl-3 mb-3 border-red-500">
              2024 시즌 팀 순위
            </h4>
            {/* 2024 SEASON 누적 관중 차트 */}
            <div className="w-full h-full">
              {/* <SeasonCrowdStatusTable crowdStatus={crowdStatus} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CrowdStatus;
