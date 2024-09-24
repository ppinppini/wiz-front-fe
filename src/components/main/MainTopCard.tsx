import GameRank from "../GameRank";
import ParkingCard from "../ParkingCard";

// Main 페이지의 상단 팀 순위, 주차 예약제 컴포넌트

const MainTopCard = () => {
  return (
    <>
      <div
        className="flex space-x-4 mx-auto w-full max-w-[1200px] px-[50px] mb-[160px]
    mt-[50px]"
      >
        <div className="w-1/2 h-64">
          <GameRank />
        </div>
        <div className="w-1/2 h-64">
          <ParkingCard />
        </div>
      </div>
    </>
  );
};

export default MainTopCard;
