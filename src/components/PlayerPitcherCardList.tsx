import { useEffect, useState } from 'react'
import PlayerPitcherCard from './PlayerPitcherCard';
import { api } from '../api/api';
import { TPlayerPitcherProps } from '../types/types';


const PlayerPitcherCardList = () => {

   
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
        {players.map((player) => (
          <li
            key={player.pcode}
            className='w-[320px] py-[68px] ml-[70px]'
          >
            <PlayerPitcherCard
              number={player.backnum}
              name={player.playerName}
              imageUrl={player.playerPrvwImg}
              pcode={player.pcode}
              playerData={player}
              playerDatas={players}
            />
          </li>    
        ))}
      </ul>
    </div>
  );
};

export default PlayerPitcherCardList;
