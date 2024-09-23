import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PlayerType {
  backnum: string;
  playerName: string;
  playerPrvwImg: string;
  pcode: string;
  title:string;
  route:string;
}

interface TPlayerTabs {
  title:string;
  route:string;
}

interface PlayerCarouselProps {
  playerTabs: PlayerType[]; // props로 playerTabs를 받을 수 있도록 수정
}

const PlayerCarousel: React.FC<PlayerCarouselProps> = ({ playerTabs }:PlayerCarouselProps) => {
  // props로 받은 playerTabs가 있을 때, data.gameplayer를 사용해 필요한 데이터만 추출
  const [players, setPlayers] = useState<PlayerType[]>([]); 
  const navigate = useNavigate();

  // props로 받은 playerTabs가 변경될 때마다 players를 업데이트
  useEffect(() => {
    if (playerTabs && playerTabs.length > 0) {
      setPlayers(playerTabs);
    }
  }, [playerTabs]);
  console.log(players);
  
  return (
    <>
      <h2 className="text-xl font-bold text-left mt-8">KT Wiz 선수 목록 확인하기</h2>
      <Swiper spaceBetween={10} slidesPerView={players.length < 4 ? players.length : 4} loop={true} className="!pt-0">
        {players.map((player, index) => (
          <SwiperSlide key={index}>
            <div className="relative group text-center hover-blur">
              <img
                src={player.playerPrvwImg}
                alt={player.playerName}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 backdrop-filter backdrop-blur-lg">
                <button
                  onClick={() => navigate(`/player/pitcher/details?pcode=${player.pcode}`)}
                  className="text-white border border-white py-2 px-4 rounded-lg cursor-pointer"
                >
                  프로필
                </button>
              </div>
              <div className="inline-block relative text-left pl-[90px]">
                <p className="absolute top-0 left-0 w-20 font-semibold text-[74px] text-gray-400 text-center tracking-tight leading-[74px] mr-4">
                  {player.backnum}
                </p>
                <p className="font-sans text-[20px] leading-[30px] pt-1">
                  {player.playerName}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-2">
        <button
          className="text-white rounded-lg hover:bg-gray-600 transition h-13 leading-[52px] w-[200px] px-[52px] py-0 bg-transparent border border-[rgba(255,255,255,0.5)]"
          onClick={() => (window.location.href = '/player/pitcher')}
        >
          목록
        </button>
      </div>
    </>
  );
};

export default PlayerCarousel;
