import PageLocator from "../../components/PageLocator";

const RankingRecord = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        {/* 메인 컨텐츠 컨테이너 */}
        <div className='w-[1100px] h-[1590.5px] mx-[25.1em] pt-[4.625em] relative bg-green-300'>

          {/* 페이지 로케이터 */}
          <PageLocator pagePath='> Game > 정규 리그 >' currentPage='경기 일정' />

          {/* RANK RECORD INNER TAB - 탭작업 다른분들이 진행중 (보류) */}
          <div className="relative mt-[38px]"></div>

          {/* 2024 SEASON TEAM RANK */}
          <div className="mt-[40px] block" ></div>

          {/* 2024 SEASON TEAM RECORD */}
          <div></div>

          {/* 2024 SEASON TEAM PITCHER RECORD */}
          <div></div>

          {/* 2024 SEASON TEAM BATTER RECORD */}
          <div></div>

          {/* 2024 SEASON TEAM W/L TABLE */}
          <div></div>

        </div>
      </div>
    </>
  );
}
export default RankingRecord