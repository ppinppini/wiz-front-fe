import { useEffect, useState } from "react";
import GameContainer from "../game/GameContainer";
import MainGameSchedule from "../../assets/main-game-schedule.png";
import { api } from "../../api/api";
import { TGameInfo } from "../../types/types";

const MainPageGameSchedule = () => {
  const [currentGame, setCurrentGame] = useState<TGameInfo | null>(null);
  const [prevGame, setPrevGame] = useState<TGameInfo | null>(null);
  const [nextGame, setNextGame] = useState<TGameInfo | null>(null);
  const [displayedGame, setDisplayedGame] = useState<TGameInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 이전 버튼 클릭 핸들러
  const handlePrevBtnClick = () => {
    if (displayedGame === currentGame && prevGame) {
      setDisplayedGame(prevGame); // current에서 prev로 이동
    } else if (displayedGame === nextGame && currentGame) {
      setDisplayedGame(currentGame); // next에서 current로 이동
    }
  };

  // 다음 버튼 클릭 핸들러
  const handleNextBtnClick = () => {
    if (displayedGame === currentGame && nextGame) {
      setDisplayedGame(nextGame); // current에서 next로 이동
    } else if (displayedGame === prevGame && currentGame) {
      setDisplayedGame(currentGame); // prev에서 current로 이동
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recentGameData = await api.getRecentGame();
        setCurrentGame(recentGameData.current);
        setPrevGame(recentGameData.prev);
        setNextGame(recentGameData.next);
        setDisplayedGame(recentGameData.current);
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

  if (!currentGame) {
    return (
      <div className="flex flex-col items-center">
        현재 게임에 대한 정보가 없습니다.
      </div>
    );
  }

  if (!displayedGame) {
    return (
      <div className="flex flex-col items-center">
        출력되는 경기에 대한 정보가 없습니다.
      </div>
    );
  }

  return (
    // GAME SCHEDULE SECTION CONTAINER
    <div className="flex flex-col items-center mt-[6.1875em]">
      {/* GAME SCHEDULE IMAGE */}
      <div className="w-[51.625em] h-[6.5625em] relative overflow-hidden">
        <img src={MainGameSchedule} alt="game-schedule-image" />
      </div>

      {/* GAME SCHEDULE CONTENT CONTAINER */}
      <div className="flex flex-row w-[68.75em] h-[18.875em] px-[3.125em] py-[2.5em] rounded-[1.25em] shadow-[0_30px_30px_-10px_rgba(245,50,50,.3)] ">
        {/* GAME INFO CARD CONTAINER */}
        <div className="w-[37.8125em] h-[13.875em] pr-[1.25em]">
          <GameContainer
            gameInfo={{
              homeTeam: displayedGame.home,
              awayTeam: displayedGame.visit,
              homeScore: displayedGame.homeScore,
              awayScore: displayedGame.visitScore,
              gameDate: `${displayedGame.gyear}.${displayedGame.gmonth}.${displayedGame.gday}`,
              stadium: displayedGame.stadium,
              gtime: displayedGame.gtime,
              gmkey: displayedGame.gmkey,
              displayDate: displayedGame.displayDate,
              homeLogo: displayedGame.homeLogo,
              visitLogo: displayedGame.visitLogo,
            }}
            handlePrevBtnClick={handlePrevBtnClick}
            handleNextBtnClick={handleNextBtnClick}
          />
        </div>

        {/* VIDEO CONTAINER */}
        <div className="w-[24.6875em] h-[13.875em] bg-blue-300">
          {/* HIGHLIGHT VIDEO */}
          <iframe
            src={`https://tv.naver.com/embed/42663688?autoPlay=false`}
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainPageGameSchedule;
