import OnlineStoreCard from "../OnlineStoreCard";
import PlayerOfTheMonthCard from "../PlayerOfTheMonthCard";

const MainBottomCard = () => {
  return (
    <>
      <div
        className="flex space-x-4 box-border
    relative mx-auto w-full max-w-[1200px] px-[50px] mb-[160px]
    mt-[140px]"
      >
        <OnlineStoreCard />
        <PlayerOfTheMonthCard />
      </div>
    </>
  );
};
export default MainBottomCard;
