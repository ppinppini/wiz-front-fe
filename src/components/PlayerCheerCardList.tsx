import React, { useEffect, useState } from 'react'
import PlayerCheerCard from './PlayerCheerCard';
import { api } from '../api/api';
import { TPlayerCheerProps } from '../types/types';


const PlayerCheerCardList = () => {

  
  const [players, setPlayers] = useState<TPlayerCheerProps[]>([]);
  
  useEffect(()=>{
    const fetchPlayers = async () => {
      try {
        const playerData = await api.getPlayerCheerImage();
        setPlayers(playerData);
      } catch (error) {
        console.error("선수 데이터를 불러오는데 실페했습니다:", error);
      }
    };

    fetchPlayers();
  }, []);
    
  return (
    <div className='player_list w-[1240px]'>
      <ul className='flex flex-wrap w-[1240px] mx-auto'>
        {players.map((player, index) => (
          <li
            key={index}
            className='w-[320px] py-[68px] ml-[70px]' 
          >
            <PlayerCheerCard
              number={player.leaderSeq}
              name={player.leaderName}
              imageUrl={player.imgPrvwPath}
              playerData={player}
            />
          </li>    
        ))}
      </ul>
    </div>
  );
};

export default PlayerCheerCardList;
