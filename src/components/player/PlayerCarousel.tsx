import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PlayerType {
  backnum: string;
  playerName: string;
  playerPrvwImg: string;
  pcode: string;
}

interface PlayerCarouselProps {
  playerList: PlayerType[]; // props로 playerList를 받음
}

const PlayerCarousel: React.FC<PlayerCarouselProps> = ({ playerList }) => {
  const [players, setPlayers] = useState<PlayerType[]>([]); 
  const navigate = useNavigate();

  // playerList가 변경될 때마다 players 상태 업데이트
  useEffect(() => {
    if (playerList && playerList.length > 0) {
      setPlayers(playerList);
    }
  }, [playerList]);

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
                  onClick={() => {
                    navigate(`/player/pitcher/details?pcode=${player.pcode}`);
                    window.scrollTo(0,0);
                  }}
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
          onClick={() => {
            navigate('/player/pitcher');
            window.scrollTo(0,0);
          }} // 목록 페이지로 이동
        >
          목록
        </button>
      </div>
    </>
  );
};

export default PlayerCarousel;
