/*컴포넌트 화면에서 확인하기위한
임시 메인페이지*/

import OnlineStoreCard from "../OnlineStoreCard";
import PlayerOfTheMonthCard from "../PlayerOfTheMonthCard";

const MainBottomCard = () => {
  return (
    <>
    <div className="flex space-x-4 box-border
    relative mx-auto w-full max-w-[1200px] px-[50px] mb-[160px]
    mt-[300px]">
    <OnlineStoreCard/>
    <PlayerOfTheMonthCard/>
    </div>
    
    </>
  );
}
export default MainBottomCard