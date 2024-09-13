import React from 'react';
import { Link } from 'react-router-dom';

interface GameResultProps {
  homeScore?: number;
  awayScore?: number;
  gmkey: string;
  displayDate: string;
}

const GameResult: React.FC<GameResultProps> = ({
  homeScore = 0,
  awayScore = 0,
  gmkey,
  displayDate,
}) => {
  return (
    
    <div className='flex flex-col items-center'>

      {/* 점수 */}
      <div>
        <span className='inline-block w-[108px] h-[94px] text-center text-[4em] font-bold'>
          {awayScore}
        </span>
        <span className='inline-block text-[3.125em] h-[94px]'>:</span>
        <span className='inline-block w-[108px] h-[94px] text-center text-[4em] font-bold'>
          {homeScore}
        </span>
      </div>

      {/* 경기 상세정보 */}
      <div className='w-[16.5625em] h-[1.6875em] mt-[-0.625em] flex justify-center'>
        <Link to={`/regular/boxscore/${displayDate}/${gmkey}`}>
          <div className='notokr relative flex flex-row justify-center items-center py-[7px] pr-[32px] pl-[12px] bg-gray-900 bg-opacity-50 text-[0.8125em] text-white rounded-md cursor-pointer'>
            경기정보
            <img
              src='https://www.ktwiz.co.kr/v2/imgs/ico-18-navi-next.svg'
              alt='경기정보 보기'
              className='absolute right-[0.625em]'
            />
          </div>
        </Link>
      </div>

    </div>
  );
};

export default GameResult;
