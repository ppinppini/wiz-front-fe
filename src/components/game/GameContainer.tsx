import React from 'react';
import TeamInfo from './TeamInfo';
import GameResult from './GameResult';
import GameInfo from './GameInfo';

interface GameContainerProps {
  gameInfo: {
    homeTeam: string;
    awayTeam: string;
    homeScore?: number;
    awayScore?: number;
    gameDate: string;
    stadium: string;
    gtime: string;
    gmkey: string;
    displayDate: string;
    homeLogo: string;
    visitLogo: string;
  };
  handlePrevBtnClick: () => void
  handleNextBtnClick: () => void
}

const GameContainer: React.FC<GameContainerProps> = ({ gameInfo, handlePrevBtnClick, handleNextBtnClick }) => {
  
  return (
    <>
      <div className='flex flex-col items-center'>
          {/* GAME INFO CARD CONTAINER */}
          <div className='w-[37.8125em] h-[13.875em] pr-[1.25em]'>

            {/* GAME INFO CARD HEADER */}
            <div className='flex flex-row justify-between items-center text-3xl border-b-[0.0625em] pb-3'>

              {/* 이전 경기 버튼 */}
              <img
                src='https://www.ktwiz.co.kr/v2/imgs/ico-24-navi-prev.svg'
                alt='prev-game-button'
                onClick={handlePrevBtnClick}
                className='cursor-pointer '
                />

              {/* 경기 시간 및 장소 */}
              <GameInfo
                gameDate={gameInfo.gameDate}
                stadium={gameInfo.stadium}
                gtime={gameInfo.gtime}
              />

                {/* 다음 경기 버튼 */}
              <img
                src='https://www.ktwiz.co.kr/v2/imgs/ico-24-navi-next.svg'
                alt='next-game-button'
                onClick={handleNextBtnClick}
                className='cursor-pointer '
              />
            </div>

            {/* GAME INFO CARD BODY */}
            <div className=' pt-[1.125em] w-[36.5625em] h-[9.375em] flex flex-row justify-between items-center'>
              {/* 원정팀 정보 */}
              <TeamInfo teamName={gameInfo.awayTeam} teamLogo={gameInfo.homeLogo} />        

              {/* 경기 결과 */}
              <GameResult 
                homeScore={gameInfo.homeScore}
                awayScore={gameInfo.awayScore}
                gmkey={gameInfo.gmkey}
                displayDate={gameInfo.displayDate}
              />

              {/* 홈팀 정보 */}
              <TeamInfo teamName={gameInfo.homeTeam} teamLogo={gameInfo.visitLogo} />
            </div>

          </div>
        </div>
    </>
  );
};

export default React.memo(GameContainer);
