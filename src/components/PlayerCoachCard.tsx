import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TPlayerCoachProps } from '../types/types';

interface PlayerCardProps {
    number: string;
    name: string;
    imageUrl: string;
    pcode: string;
    playerData: TPlayerCoachProps;
}

const PlayerCoachCard: React.FC<PlayerCardProps> = ({ number, name, imageUrl, pcode, playerData }) => {
  
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/player/coach/details?pcode=${pcode}`, {
      state: { playerData },
    });
  };
  
  return (
    <div className='relative w-[320px] h-[320px] group'>
      <img 
        src={imageUrl} 
        alt={name} 
        className='w-[320px] transition duration-300 ease-in-out group-hover:blur-md rounded-md'
      />
      {/* 약력 카드 */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        <div 
          className="relative w-[82%] h-[75%] border-none bg-transparent overflow-hidden flex items-center justify-center rounded-xl cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-2xl"
          onClick={handleClick}
        >
          {/* 배경색 채우기 */}
          <div className="absolute inset-0 transition-transform duration-700 ease-in-out transform -translate-x-full bg-red-500 bg-opacity-50 pointer-events-none group-hover:translate-x-0"></div>
          {/* 'Profile' 텍스트 */}
          <div className='flex flex-col items-start justify-center space-y-3'>
            <span className="relative z-10 text-[19px] font-semibold text-black">생년월일: {playerData.birth}</span>
            <span className="relative z-10 text-[19px] font-semibold text-black">체격: {playerData.heightWeight}</span>
            <span className="relative z-10 text-[19px] font-semibold text-black">직책: {playerData.position}</span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mt-4 space-x-6 text-white'>
        <span className='text-gray-500 text-[40px] font-extrabold'>No.{number}</span>
        <span className='text-[30px]'>{name}</span>
      </div>
    </div>
  );
};

export default PlayerCoachCard;
