import { useEffect, useState } from "react";
import ScheduleTopCard from "./ScheduleTopCard";
import { TGameInfo } from "../../types/types";
import { api } from "../../api/api";

const ScheduleTop = () => {

    const [currentGame, setCurrentGame] = useState<TGameInfo | null>(null);
    const [prevGame, setPrevGame] = useState<TGameInfo | null>(null);
    const [nextGame, setNextGame] = useState<TGameInfo | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {      
      const fetchData = async () => {
        try {
          const recentGameData = await api.getRecentGame();
          setCurrentGame(recentGameData.current);
          setPrevGame(recentGameData.prev);
          setNextGame(recentGameData.next);
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
  
    if (!currentGame || !prevGame || !nextGame) {
      return <div className='flex flex-col items-center'>경기정보를 읽어오는데 문제가 발생하였습니다.</div>;
    }

  return (
    <>
        {/* Game Schedule Top Area */}
        <div className="flex flex-col w-[1100px] h-[302px] py-[38px] text-white">
            {/* Game Schedule Top Container */}
            <div className="w-[1100px] h-[226px]">
                <ul className="flex flex-row">
                  <ScheduleTopCard 
                    isCurrent={false} 
                    gameInfo={{
                      homeFullName: prevGame.homeFullname,
                      visitFullName: prevGame.visitFullname,
                      homeScore: prevGame.homeScore,
                      visitScore: prevGame.visitScore,
                      homeLogo: prevGame.homeLogo,
                      visitLogo: prevGame.visitLogo,
                      homeStarter: prevGame.homeStarter,
                      visitStarter: prevGame.visitStarter,
                      homeDecision: prevGame.homeDecision,
                      visitDecision: prevGame.visitDecision,
                      gameDate: `${prevGame.gyear}.${prevGame.gmonth}.${prevGame.gday}`,
                      stadium: prevGame.stadium,
                      gtime: prevGame.gtime,
                      gmkey: prevGame.gmkey,
                      displayDate: prevGame.displayDate,
                      outcome: prevGame.outcome
                    }}
                  />
                  <ScheduleTopCard 
                    isCurrent={true} 
                    gameInfo={{
                      homeFullName: currentGame.homeFullname,
                      visitFullName: currentGame.visitFullname,
                      homeScore: currentGame.homeScore,
                      visitScore: currentGame.visitScore,
                      homeLogo: currentGame.homeLogo,
                      visitLogo: currentGame.visitLogo,
                      homeStarter: currentGame.homeStarter,
                      visitStarter: currentGame.visitStarter,
                      gameDate: `${currentGame.gyear}.${currentGame.gmonth}.${currentGame.gday}`,
                      stadium: currentGame.stadium,
                      gtime: currentGame.gtime,
                      gmkey: currentGame.gmkey,
                      displayDate: currentGame.displayDate,
                      outcome: currentGame.outcome
                    }}
                  />
                  <ScheduleTopCard 
                    isCurrent={false} 
                    gameInfo={{
                      homeFullName: nextGame.homeFullname,
                      visitFullName: nextGame.visitFullname,
                      homeScore: nextGame.homeScore,
                      visitScore: nextGame.visitScore,
                      homeLogo: nextGame.homeLogo,
                      visitLogo: nextGame.visitLogo,
                      homeStarter: nextGame.homeStarter,
                      visitStarter: nextGame.visitStarter,
                      gameDate: `${nextGame.gyear}.${nextGame.gmonth}.${nextGame.gday}`,
                      stadium: nextGame.stadium,
                      gtime: nextGame.gtime,
                      gmkey: nextGame.gmkey,
                      displayDate: nextGame.displayDate,
                      outcome: nextGame.outcome
                    }}
                  />

                </ul>
            </div>
        </div>
        

        {/* <pre>{JSON.stringify(currentGame, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(prevGame, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(nextGame, null, 2)}</pre> */}
    </>
  );
}
export default ScheduleTop