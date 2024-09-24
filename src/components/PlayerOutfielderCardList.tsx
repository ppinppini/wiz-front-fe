import { useEffect, useState } from 'react'
import PlayerOutfielderCard from './PlayerOutfielderCard';
import { api } from '../api/api';
import { TPlayerOutfielderProps } from '../types/types';


const PlayerOutfielderCardList = () => {

  
  const [players, setPlayers] = useState<TPlayerOutfielderProps[]>([]);
  
  useEffect(()=>{
    const fetchPlayers = async () => {
      try {
        const playerData = await api.getPlayerOutfielderImage();
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
            <PlayerOutfielderCard
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

export default PlayerOutfielderCardList;
