import React, { useEffect, useState } from 'react'
import PlayerPitcherCard from './PlayerPitcherCard';
import { api } from '../api/api';
import { TPlayerPitcherProps } from '../types/types';


const PlayerPitcherCardList = () => {

  // type playerProps = {
  //   backnum: string;
  //   playerName: string;
  //   playerPrvwImg: string;
  //   pcode: string;
  // }  
   
  const [players, setPlayers] = useState<TPlayerPitcherProps[]>([]);
  
  useEffect(()=>{
    const fetchPlayers = async () => {
      try {
        const playerData = await api.getPlayerPitcherImage();
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
            key={player.pcode}
            className={`w-[413px] py-[68px] ${
              (index + 1) % 3 !== 0 ? 'border-r-[1px] border-white' : ''
            }`}
          >
            <PlayerPitcherCard
              number={player.backnum}
              name={player.playerName}
              imageUrl={player.playerPrvwImg}
              pcode={player.pcode}
              playerData={player}
            />
          </li>    
        ))}
      </ul>
    </div>
  );
};

export default PlayerPitcherCardList;
